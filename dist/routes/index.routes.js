"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _products = require("../controllers/products.controllers");

const router = (0, _express.Router)();
router.get("/", _products.renderIndex);
router.get("/aeromax-server", _products.renderAeromax);
router.post("/products/add", _products.addProduct);
router.get("/edit/:id", _products.renderEdit);
router.post("/edit/:id", _products.editProduct);
router.get("/delete/:id", _products.deleteProduct);
router.get("/all-products", _products.allProducts);
var _default = router;
exports.default = _default;