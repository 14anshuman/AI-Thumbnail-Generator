import express from 'express';
import protect from '../middlewares/auth.js';
import { getThumbnailById, getUserThumbnails } from '../controllers/userController.js';

const UserRouter=express.Router();


UserRouter.get('/thumbnails',protect,getUserThumbnails);
UserRouter.get('/thumbnail/:id',protect,getThumbnailById);


export default UserRouter;