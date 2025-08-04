// services/auth-service/src/utils/jwt.ts
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export const generateToken = (payload: object, expiresIn = '1h') =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: '1hr' });

export const verifyToken = (token: string) =>
  jwt.verify(token, JWT_SECRET);
