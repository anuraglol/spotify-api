"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var now_playing_1 = require("./routes/now-playing");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(body_parser_1["default"].json());
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use("/now-playing", now_playing_1["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
