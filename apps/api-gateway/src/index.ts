import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
   path: `./.env.${process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development'}`
});
const app = express();
app.get('/api/health', (req, res) => res.send('API Gateway is running'));
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`API Gateway running (port: ${PORT})`));
