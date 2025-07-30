import express from 'express';
const app = express();
app.get('/api/health', (req, res) => res.send('API Gateway is running'));
app.listen(4000, () => console.log('API Gateway running (port: 4000)'));
