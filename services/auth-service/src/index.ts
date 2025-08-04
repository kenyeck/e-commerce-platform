import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config';
import { authRoutes } from './auth/routes';

dotenv.config({
   path: `./.env.${process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development'}`
});

connectDB();

const app = express();
app.use(express.json());
app.use('/', authRoutes);


const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Auth Service running (port: ${PORT})`));

