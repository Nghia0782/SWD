import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

// Xem danh sách sản phẩm, tìm kiếm, lọc
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Thêm sản phẩm mới
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Thêm sản phẩm thành công", product });
  } catch (err) {
    res.status(400).json({ message: "Lỗi khi thêm sản phẩm", error: err.message });
  }
});

// Xem chi tiết sản phẩm
router.get("/:id", async (req, res) => {
  // ... Xử lý lấy chi tiết sản phẩm ...
  res.json({});
});

export default router;