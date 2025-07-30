import express from 'express';
const app = express();
app.get('/api/health', (req, res) => res.send('Auth Service is running'));
app.listen(4001, () => console.log('Auth Service running (port: 4001)'));
