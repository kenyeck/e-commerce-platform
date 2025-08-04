import { Router } from 'express';
import proxy from 'express-http-proxy';
import { verifyToken } from './middleware/auth';
import { SERVICES } from './config';

const router: Router = Router();

// Public routes
router.use(
   '/auth',
   proxy((req) => {
      console.log('Proxying to Auth Service', SERVICES.AUTH + req.originalUrl);
      return SERVICES.AUTH + req.originalUrl;
   })
);

// Protected routes
router.use('/users', verifyToken, proxy(SERVICES.USER));
router.use('/products', verifyToken, proxy(SERVICES.PRODUCT));
router.use('/inventory', verifyToken, proxy(SERVICES.INVENTORY));
router.use('/cart', verifyToken, proxy(SERVICES.CART));
router.use('/orders', verifyToken, proxy(SERVICES.ORDER));
router.use('/payments', verifyToken, proxy(SERVICES.PAYMENT));
router.use('/notifications', verifyToken, proxy(SERVICES.NOTIFICATION));

export default router;
