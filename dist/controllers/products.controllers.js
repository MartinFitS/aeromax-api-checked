"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIndex = exports.renderEdit = exports.renderAeromax = exports.editProduct = exports.deleteProduct = exports.allProducts = exports.addProduct = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

const renderIndex = async (req, res) => {
  res.render("aeromaxHub");
};

exports.renderIndex = renderIndex;

const renderAeromax = async (req, res) => {
  const products = await _Product.default.find().lean();
  res.render("index.hbs", {
    products: products
  });
}; // export const renderIndex =  async(req,res)=>{
//     const products = await Product.find().lean();
//     res.render("index.hbs", {products: products});
// }
// export const renderAeromax = async(req,res)=>{
//     res.render("aeromaxHub")
// }


exports.renderAeromax = renderAeromax;

const addProduct = async (req, res) => {
  const product = (0, _Product.default)(req.body);
  const productSaved = await product.save();
  console.log(productSaved);
  res.redirect("/aeromax-server");
};

exports.addProduct = addProduct;

const renderEdit = async (req, res) => {
  try {
    const product = await _Product.default.findById(req.params.id).lean();
    res.render("edit", {
      product: product
    });
  } catch (e) {
    console.log(e);
  }
};

exports.renderEdit = renderEdit;

const editProduct = async (req, res) => {
  await _Product.default.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/aeromax-server");
};

exports.editProduct = editProduct;

const deleteProduct = async (req, res) => {
  const {
    id
  } = req.params;
  await _Product.default.findByIdAndDelete(id);
  res.redirect("/aeromax-server");
};

exports.deleteProduct = deleteProduct;

const allProducts = async (req, res) => {
  const products = await _Product.default.find().lean();
  res.json(products);
};

exports.allProducts = allProducts;