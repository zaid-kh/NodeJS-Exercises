import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
// router.get("/products/:id", findUserById);
// router.put("/products/:id", updateUser);
// router.delete("/products/:id", deleteUser);
export default router;
