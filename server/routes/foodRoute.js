import express from "express";
import {
  createFoodItem,
  listFoodItems,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), createFoodItem);
foodRouter.get("/list", listFoodItems);
foodRouter.post("/remove", removeFood);

export default foodRouter;
