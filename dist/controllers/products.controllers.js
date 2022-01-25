"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIndex = exports.renderEdit = exports.editProduct = exports.deleteProduct = exports.addProduct = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderIndex = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Product["default"].find().lean();

          case 2:
            products = _context.sent;
            res.render("index.hbs", {
              products: products
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderIndex(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderIndex = renderIndex;

var addProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var product, productSaved;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            product = (0, _Product["default"])(req.body);
            _context2.next = 3;
            return product.save();

          case 3:
            productSaved = _context2.sent;
            console.log(productSaved);
            res.redirect("/");

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addProduct = addProduct;

var renderEdit = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Product["default"].findById(req.params.id).lean();

          case 3:
            product = _context3.sent;
            res.render("edit", {
              product: product
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function renderEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderEdit = renderEdit;

var editProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Product["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            res.redirect("/");

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function editProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editProduct = editProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Product["default"].findByIdAndDelete(id);

          case 3:
            res.redirect("/");

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;