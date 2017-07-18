var mongoose = require("./connection");
var itemsData = require("./itemsData.json");

var Category = mongoose.model("Category");
var Post = mongoose.model("Post");

Post.remove({}, function(err){
  console.log(err)
});

//
// var laptop = new Post({item_name: "MacBook Pro", image_url: "https://cnet1.cbsistatic.com/img/wa3E07AL5oV2kw_BLMG8U8wU1Uw=/770x433/2014/08/04/1b0a7d81-3bf3-4b6d-89e3-eedb5cef511c/apple-macbook-pro-with-retina-display-15-inch-july-2014-product-photos11.jpg", description: "2014 15in MacBook Pro.", location: "Washington DC"})
//
// var ipod = new Post({item_name: "iPod Classic", image_url: "https://i.amz.mshcdn.com/HwdLOMrryBwKpn8qH4NjluNaA1U=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fthe-evolution-of-the-apple-ipod%2F08classic_front.jpg", description: "2007 Classic iPod. Comes with 3000+ songs.", location: "Northern Virginia"})
//
// var tv = new Post({item_name: "Samsung TV", image_url: "http://www.220-electronics.com/media/catalog/product/s/a/samsung-ua55eh6000-multi-system-tv.jpg", description: "2014 Samsung SmartTV. Small crack.", location: "Northern Virginia"})
//
// var android = new Post({item_name: "Samsung Galaxy S3", image_url: "https://images-na.ssl-images-amazon.com/images/G/01/wireless/detail-page/RM_ML_SS_GlxyS3_Blue_Front-Dandln-O25in.jpg", description: "Samsung Galaxy S III 4G Android Phone, Blue 32GB.", location: "Washington DC"})
//
// var couch = new Post({item_name: "Grey Couch", image_url: "http://cozycouchsf.com/wp-content/uploads/2016/03/main-image.jpg", description: "Cozy grey couch for free.", location: "Washington DC"})
//
// var desk = new Post({item_name: "Black Computer Desk", image_url: "http://www.ikea.com/PIAimages/0461352_PE607513_S5.JPG", description: "Never used black computer desk.", location: "Northern Virginia"})
//
// var dining = new Post({item_name: "Classy Dining Table Set", image_url: "https://content.haycdn.com/mgen/master:WIT275.jpg", description: "Dining room table set for 6.", location: "Northern Virginia"})
//
// var barstools = new Post({item_name: "Kitchen Bar Stools", image_url: "https://images.cb2.com/is/image/CB2/ReverbStoolsGrpS15_16x9/web_zoom_furn_hero/150904112020/reverb-bar-stools.jpg", description: "Dining room table set for 6.", location: "Northern Virginia"})
//
// var lotr = new Post({item_name: "Lord of the Rings Bluray Set", image_url: "https://i.ytimg.com/vi/BALvG38Txwc/maxresdefault.jpg", description: "The Lord of the Rings Trilogy Bluray Set Extended Edition.", location: "Northern Virginia"})
//
// var harrypotter = new Post({item_name: "Harry Potter Book Set", image_url: "http://wizardsandwhatnot.com/files/2016/02/Harry-Potter-bookset.jpg", description: "Custom-made hard cover Harry Potter Book Set.", location: "Washington DC"})
//
// var games = new Post({item_name: "Xbox 360 Games", image_url: "https://img.wonderhowto.com/img/01/14/63485389782652/0/make-your-xbox-360-games-region-free.w1456.jpg", description: "100+ Xbox 360 Games for free.", location: "Washington DC"})
//
// var ps3 = new Post({item_name: "PS3", image_url: "http://www.wikihow.com/images/4/4e/Fix-the-PS3-White-Lines-Step-7-Version-2.jpg", description: "PS3 with 2 controllers.", location: "Northern VA"})
//
// var sweater = new Post({item_name: "Ocean Waves Sweater", image_url: "https://cdn.shopify.com/s/files/1/0209/1522/products/sweatshirts-ocean-wave-sweater-1_1024x1024.jpg?v=1496807144", description: "Cool sweater bro.", location: "Northern VA"})
//
// var sweater2 = new Post({item_name: "Watermelon Sweater", image_url: "https://cdn.shopify.com/s/files/1/0209/1522/products/sweatshirts-watermelon-sweater-1_1024x1024.jpg?v=1496810964", description: "Cool Watermelon sweater girl.", location: "Northern VA"})
//
// var shorts = new Post({item_name: "Denim Shorts", image_url: "http://hr0ah34zbrtz43ik40i9ko1c.wpengine.netdna-cdn.com/wp-content/uploads/2012/06/american-flag-cutoffs81.jpg", description: "Limited wear. Stretchy.", location: "Northern VA"})
//
// var shirt = new Post({item_name: "Billy! Tshirt", image_url: "https://cdn.shopify.com/s/files/1/0999/7142/products/L_T_1024x1024.jpg?v=1477687859", description: "Grey unisex tshirt.", location: "Northern VA"})
//
// var electronics = new Category({type: "Electronics"})
// var furniture = new Category({type: "Furniture"})
// var digital_media = new Category({type: "Digital Media"})
// var clothes = new Category({type: "Clothes"})
//
// var posts = [laptop, ipod, couch, barstools, lotr, harrypotter, sweater, shirt]
// var categories = [electronics, furniture, digital_media, clothes]
//
//
// categories.forEach((category, i) =>{
//   category.posts.push(posts[i], posts[i+1])
// })

Category.remove({}).then(function(){
  Category.collection.insert(itemsData).then(function(res){
    console.log(res);
    process.exit();
  });
});
