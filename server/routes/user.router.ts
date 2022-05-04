import {Router} from 'express';
import UserController from '../controllers/user.controller';
import AuthMiddleware from '../middleware/auth.middleware';
const userRouter = Router();

/** Routes */
userRouter.get("/getAll",AuthMiddleware.authenToken,UserController.getAllUsers);

export default userRouter;


