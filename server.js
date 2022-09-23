var express = require("express");
var app = express();

app.use(express.static("../threejs-seventh")).listen(7777, () => {
    console.log('running:  http://localhost:7777')
});