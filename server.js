var express = require("express");
var parser = require("body-parser");
var mongoose = require("./db/connection");

var app = express();

var Category = mongoose.model("Category");
var Post = mongoose.model("Post");

app.set("port", process.env.PORT || 3001);

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/api/categories", function(req, res) {
  Category.find({}).then((categories)=>{
    res.json(categories)
  })
});

app.listen(app.get('port'), ()=>{
  console.log("listening")
})
