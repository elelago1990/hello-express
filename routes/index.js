var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const products= [
    {name:"microondas", price: 45 , stock:6},
    {name:"rigorifico", price: 200, stock:4},
    {name:"tv", price: 120, stock: 2},
    {name:"impresora", price: 200, stock:6},
    {name:"roomba", price: 99, stock: 12}
  ];
  res.render('index', { title: 'Elena', products });
});

module.exports = router;
