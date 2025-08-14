import jwt from 'jsonwebtoken';
import { HttpError } from '../utils/apiResponse.js';

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new HttpError(401, 'Akses ditolak. Tidak ada token yang diberikan.');
    }

    // Ambil token dari header "Bearer <token>"
    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
        next(new HttpError(401, 'Token sudah kedaluwarsa.'));
    }
    if (err instanceof jwt.JsonWebTokenError) {
        next(new HttpError(401, 'Token tidak valid.'));
    }

    return next(err);
  }
}

export default authMiddleware;