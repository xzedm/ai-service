// src/routes/contactRoutes.ts
import { Router } from 'express';
import { submitContactForm } from '../controllers/contactController';
import { createContactLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/', createContactLimiter, submitContactForm);

export default router;