/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.write("hello");
    res.end();
});
app.listen(3030);
