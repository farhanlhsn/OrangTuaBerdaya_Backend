/**
 * Kelas Error Kustom untuk Representasi Error HTTP.
 * Gunakan ini di seluruh aplikasi Anda (services, controllers) untuk melempar error
 * yang memiliki status code dan pesan yang jelas.
 * Error ini akan ditangkap oleh errorHandler middleware terpusat.
 *
 * @example
 * import { HttpError } from './apiResponse.js';
 * if (!user) {
 *   throw new HttpError(404, 'User tidak ditemukan');
 * }
 */
export class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}

/**
 * Fungsi dasar untuk mengirim respons sukses yang terstruktur.
 * @param {object} res - Objek Response dari Express.
 * @param {number} statusCode - Kode status HTTP (e.g., 200, 201).
 * @param {string} message - Pesan sukses.
 * @param {object|array|null} data - Data yang akan dikirim.
 */
function successResponse(res, statusCode, message, data = null) {
  const responsePayload = {
    success: true,
    statusCode,
    message,
  };

  if (data !== null) {
    responsePayload.data = data;
  }

  res.status(statusCode).json(responsePayload);
}

/**
 * Helper untuk mengirim respons 200 OK.
 * @param {object} res - Objek Response dari Express.
 * @param {string} message - Pesan sukses.
 * @param {object|array|null} data - Data payload.
 */
export function ok(res, message, data = null) {
  successResponse(res, 200, message, data);
}

/**
 * Helper untuk mengirim respons 201 Created.
 * Berguna setelah berhasil membuat data baru.
 * @param {object} res - Objek Response dari Express.
 * @param {string} message - Pesan sukses.
 * @param {object|array|null} data - Data yang baru dibuat.
 */
export function created(res, message, data = null) {
  successResponse(res, 201, message, data);
}