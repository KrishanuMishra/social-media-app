import express from 'express';
import {createPost, getPost} from '../controllers/post.controller.js';

const router = express.Router();

router.route('/').post(createPost).get(getPost);

export default router;
