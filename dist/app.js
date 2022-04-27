"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = require("express-handlebars");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

const app = (0, _express.default)();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};
app.set("views", _path.default.join(__dirname + "/views"));
app.engine(".hbs", (0, _expressHandlebars.engine)({
  extname: ".hbs",
  layoutsDir: _path.default.join(app.get("views"), "layouts"),
  defaultLayout: "main"
}));
app.set("view engine", "hbs"); //middlewares

app.use((0, _morgan.default)("dev"));
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)(corsOptions)); //routes

app.use(_index.default); //static files

app.use(_express.default.static(_path.default.join(__dirname, "public")));
var _default = app;
exports.default = _default;