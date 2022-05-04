import { Router } from 'express'
const authRouter = Router();
import AuthController from '../controllers/auth.controller';
/** Routes */
authRouter.post("/register",AuthController.register);
authRouter.post("/authentication",AuthController.authenticate);
authRouter.get('/authorization',AuthController.authorize);

export default authRouter;