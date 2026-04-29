const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");


// GET ALL PRODUCTS
router.get("/", productController.getProducts);


// CREATE PRODUCT
router.post("/", productController.createProduct);


// DELETE PRODUCT
router.delete("/:id", productController.deleteProduct);


module.exports = router;