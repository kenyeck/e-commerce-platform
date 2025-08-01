import express from 'express';
const app = express();
app.get('/api/health', (req, res) => res.send('API Gateway is running'));
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`API Gateway running (port: ${PORT})`));
