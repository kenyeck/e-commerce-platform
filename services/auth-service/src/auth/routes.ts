// services/auth-service/src/routes/auth.ts
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../utils/jwt';

const router: Router = Router();

// Health check
router.get('/health', (req, res) => res.send('Auth Service is running'));

// Register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Email already in use' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed, role });
  const token = generateToken({ id: user._id, role: user.role });

  res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = generateToken({ id: user._id, role: user.role });
  res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
});

export const authRoutes = router;
