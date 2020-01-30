var express = require('express');
var router = express.Router();
var products= require( "../models/produxts.js");
/* GET home page. */
router.get('/', function(req, res, next) {

 
  res.render('index', { title: 'Elena', products });
});

router.get("/products/:ref",  function (req, res, next){
  var ref=req.params.ref;

  const product=products.find(function(p){
    return p.referencia==ref;
  });

  if (product){
  res.render("referencia", {product});}
  else{
    res.redirect("/error");
  }
});

module.exports = router;
