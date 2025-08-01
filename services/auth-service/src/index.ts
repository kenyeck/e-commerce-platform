import express from 'express';
const app = express();
app.get('/api/health', (req, res) => res.send('Auth Service is running'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth Service running (port: ${PORT})`));
