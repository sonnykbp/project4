var mongoose = require("./connection");

var Category = mongoose.model("Category");
var Post = mongoose.model("Post");

Post.remove({}, function(err){
  console.log(err)
});


var laptop = new Post({item_name: "MacBook Pro", image_url: "https://cnet1.cbsistatic.com/img/wa3E07AL5oV2kw_BLMG8U8wU1Uw=/770x433/2014/08/04/1b0a7d81-3bf3-4b6d-89e3-eedb5cef511c/apple-macbook-pro-with-retina-display-15-inch-july-2014-product-photos11.jpg", description: "2014 15in MacBook Pro.", location: "Washington DC"})

var ipod = new Post({item_name: "iPod Classic", image_url: "https://i.amz.mshcdn.com/HwdLOMrryBwKpn8qH4NjluNaA1U=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fthe-evolution-of-the-apple-ipod%2F08classic_front.jpg", description: "2007 Classic iPod. Comes with 3000+ songs.", location: "Northern Virginia"})

var electronics = new Category({type: "Electronics"})
var furniture = new Category({type: "Furniture"})

var posts = [laptop, ipod]
var categories = [electronics]


categories.forEach((category, i) =>{
  category.posts.push(posts[i], posts[i+1])
})

Category.remove({}).then(function(){
  Category.collection.insert(categories).then(function(res){
    console.log(res);
    process.exit();
  });
});
