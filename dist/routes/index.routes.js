"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controllers");

var router = (0, _express.Router)();
router.get("/", _products.renderIndex);
router.post("/products/add", _products.addProduct);
router.get("/edit/:id", _products.renderEdit);
router.post("/edit/:id", _products.editProduct);
router.get("/delete/:id", _products.deleteProduct);
var _default = router;
exports["default"] = _default;