var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/swapt');

var PostSchema = new mongoose.Schema(
  {
    item_name: String,
    image_url: String,
    description: String,
    location: String
  })

var CategorySchema = new mongoose.Schema(
  {
    type: String,
    posts: [PostSchema]
  })

  mongoose.model("Post", PostSchema);
  mongoose.model("Category", CategorySchema);

  module.exports = mongoose;
