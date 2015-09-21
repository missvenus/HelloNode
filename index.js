var express = require("express");
var app = express();
 
app.get("/", function(req, resp){
    resp.set("Content-type", "text/plain");
    resp.end("Hello, World!");
});

console.log("hit http://localhost:3000")
app.listen(3000);