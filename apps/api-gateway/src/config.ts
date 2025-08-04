// apps/api-gateway/src/config.ts
import dotenv from 'dotenv';

dotenv.config({
   path: `./.env.${process.env.NODE_ENV ? `${process.env.NODE_ENV}` : 'development'}`
});

export const SERVICES = {
  AUTH: process.env.AUTH_SERVICE_URL || 'http://auth-service:4001',
  USER: process.env.USER_SERVICE_URL || 'http://user-service:4002',
  PRODUCT: process.env.PRODUCT_SERVICE_URL || 'http://product-service:4003',
  INVENTORY: process.env.INVENTORY_SERVICE_URL || 'http://inventory-service:4004',
  CART: process.env.CART_SERVICE_URL || 'http://cart-service:4005',
  ORDER: process.env.ORDER_SERVICE_URL || 'http://order-service:4006',
  PAYMENT: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:4007',
  NOTIFICATION: process.env.NOTIFICATION_SERVICE_URL || 'http://notification-service:4008'
};
