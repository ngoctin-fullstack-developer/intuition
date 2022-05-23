import { Router } from "express";
import ProductController from "../controllers/product.controller";
const productRouter = Router();
productRouter.get('/getNewestProducts',ProductController.getNewestProducts);
productRouter.get('/getProductsByLikeName/:searchValue/:limit',ProductController.getProductsByLikeName);
export default productRouter;