import express from 'express';
import { placeOrder, verifyOrder } from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.middleware.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;