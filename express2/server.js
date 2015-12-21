var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.write("hello sriram");
});
app.listen(8090);
