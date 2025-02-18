import express from 'express';
import { authorize } from '../middlewares/auth.middleware.js';
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from '../controllers/message.controller.js';

const router = express.Router();

router.get('/users', authorize, getUsersForSidebar);
router.get('/:id', authorize, getMessages);

router.post('/send/:id', authorize, sendMessage);

export default router;
