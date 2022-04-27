"use strict";

var _mongoose = require("mongoose");

var _config = require("./config");

(async () => {
  try {
    const db = await (0, _mongoose.connect)(_config.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("DB connected to", db.connection.name);
  } catch (e) {
    console.error(e);
  }
})();