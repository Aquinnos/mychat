import express from 'express';
import {
  signup,
  signin,
  signout,
  updateProfile,
  checkAuth,
} from '../controllers/auth.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/signout', signout);

router.put('/update-profile', authorize, updateProfile);

router.get('/check', authorize, checkAuth);

export default router;
