var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const products= [
    {name:"microondas", price: 45 , stock:6, imaxes: "microond.jpg"},
    {name:"rigorifico", price: 200, stock:4, imaxes: "frigorifico.jpg"},
    {name:"tv", price: 120, stock: 2, imaxes: "tv.jpeg"},
    {name:"impresora", price: 200, stock:6, imaxes:"impre_.jpg"},
    {name:"roomba", price: 99, stock: 8, imaxes:  "roombat.jpg"},
  ];
  res.render('index', { title: 'Elena', products });
});

module.exports = router;
