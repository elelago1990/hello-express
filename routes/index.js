var express = require('express');
var router = express.Router();
var products= require( "../models/produxts.js");
var users= require('../models/user.js'); //contiene un array de objetos
/* GET home page. */
const username = req.session.username;
router.get('/', function(req, res, next) {

 
  res.render('index', { title: 'Elena', userneme, products });
});

router.get("/products/:ref",  function (req, res, next){
  var ref=req.params.ref;



  if (product){
  res.render("referencia", {product});}
  else{
    res.redirect("/error");
  }
});
var cesta=[];

router.post("/comprar", function(reg,res,next){
  const ref = req.body.ref;
//añadimos producto a la cesta

cesta.push(producto);
// redirigimos a 
res.redirect("/");
});

router.get("/login", function (reg, res, next){
  res.render("login");
});
//obtenemos datos para el login. Las cosas reg comprueba si hay ususario con ese nombre y pass. 
//Si coincide genera cookie y dirige a la pagina principal y
// si no te dfevuelve a la pagina  dellogin
router.post("/login", function(reg, res, next){
  const username = req.body.username;
  const password = req.body.username;

  //const {username, passwors}= req.body;
  const user= users.find(function(u){
    // if(u.username == username && u.password == password){
    //   return true;
    // }
    // else{
    //   return false;
    // }

    return (u.username == username && u.password == password);
  });

  if (user){
    //todo: generar cookie
    req.session.user= username;

    res.redirect("/");
  }
  else{
    res.redirect("login");
  };

});

//lo otro ees el argumento
module.exports = router; 

