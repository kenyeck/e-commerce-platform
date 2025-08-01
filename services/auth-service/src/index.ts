import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
   path: `./.env.${process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development'}`
});

const app = express();
app.get('/api/health', (req, res) => res.send('Auth Service is running'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth Service running (port: ${PORT})`));
