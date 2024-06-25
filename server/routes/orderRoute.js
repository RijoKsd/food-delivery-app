import express from 'express';
import {
  placeOrder,
  verifyOrder,
  userOrders
} from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.middleware.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders",authMiddleWare, userOrders);

export default orderRouter;