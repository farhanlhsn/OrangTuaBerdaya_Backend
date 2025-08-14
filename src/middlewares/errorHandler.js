/**
 * @file Middleware penanganan error terpusat untuk aplikasi Express.
 * WAJIB ditempatkan di akhir rantai middleware (setelah semua rute).
 * Fungsinya adalah menangkap semua error, baik yang dilempar secara eksplisit (HttpError)
 * maupun yang tidak terduga, lalu mengirimkan respons JSON yang terstruktur.
 */
import { ZodError } from 'zod';
import { HttpError } from '../utils/apiResponse.js';

/**
 * Middleware Error Handler Utama.
 * @param {Error} err - Objek error yang ditangkap.
 * @param {object} req - Objek Request dari Express.
 * @param {object} res - Objek Response dari Express.
 * @param {function} next - Fungsi next dari Express.
 */
const errorHandler = (err, req, res, next) => {
  // Log error ke konsol untuk debugging.
  // Di lingkungan produksi, pertimbangkan menggunakan logger yang lebih canggih seperti Winston atau Pino.
  console.error(err);

  // 1. Menangani error yang kita lempar secara sengaja (HttpError)
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  // 2. Menangani error validasi dari Zod
  if (err instanceof ZodError) {
    // Menggabungkan semua pesan error dari Zod menjadi satu string atau mengirim array.
    // Di sini kita ambil pesan pertama untuk kesederhanaan.
    const errorMessage = err.errors.map((e) => e.message).join(', ');
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: `Bad Request: ${errorMessage}`,
      details: err.errors, 
    });
  }

  // 3. Menangani error JSON tidak valid dari body-parser/express.json()
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Bad Request: Malformed JSON',
    });
  }
  
  // 4. Fallback untuk semua error lainnya (Internal Server Error)
  const isProduction = process.env.NODE_ENV === 'production';
  const statusCode = 500;
  const message = isProduction ? 'Internal Server Error' : err.message || 'An unexpected error occurred';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    // Di development, kita bisa tambahkan stack trace untuk mempermudah debugging
    ...( !isProduction && { stack: err.stack } )
  });
};

export default errorHandler;