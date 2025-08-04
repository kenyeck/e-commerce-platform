import express from 'express';
import morgan from 'morgan';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config({
   path: `./.env.${process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development'}`
});

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);
app.get('/api/health', (req, res) => res.send('API Gateway is running'));

app.use((err: any, req: any, res: any, next: any) => {
  console.error('API Gateway Error:', err);
  res.status(500).json({ error: 'Internal Gateway Error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API Gateway running (port: ${PORT})`));
