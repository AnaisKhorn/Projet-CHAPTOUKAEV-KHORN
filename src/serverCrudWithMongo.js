const express  = require('express');
const app      = express();
const port     = process.env.PORT || 8080;
const server   = require('http').Server(app);

const mongoDBModule = require('./crud-mongo');

// Pour les formulaires standards
const bodyParser = require('body-parser');
// pour les formulaires multiparts


// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(__dirname + '/public'));
// Paramètres standards du modyle bodyParser
// qui sert à récupérer des paramètres reçus
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Lance le serveur avec express
server.listen(port);

console.log("Serveur lancé sur le port : " + port);

//------------------
// ROUTES
//------------------
// Utile pour indiquer la home page, dans le cas
// ou il ne s'agit pas de public/index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Ici des routes en :
// http GET (pour récupérer des données)

//----------------------------------------------
// Ces routes forment l'API de l'application !!
//----------------------------------------------

// Test de la connexion à la base
app.get('/api/connection', function(req, res) {
  // Pour le moment on simule, mais après on devra
  // réellement se connecte à la base de données
  // et renvoyer une valeur pour dire si tout est ok
  mongoDBModule.connexionMongo(function(err, db) {
    let reponse;

    if(err) {
      console.log("erreur connexion");
      reponse = {
        msg: "erreur de connexion err=" + err
      }
    } else {
      reponse = {
        msg: "connexion établie"
      }
    }
    res.send(JSON.stringify(reponse));

  });
});

// On va récupérer des cas par un GET (standard REST)
// cette fonction d'API peut accepter des paramètres
// pagesize = nombre de cas par page
// page = no de la page
// Oui, on va faire de la pagination, pour afficher
// par exemple les cas 10 par 10
app.get('/api/cas', function(req, res) {
  // Si présent on prend la valeur du param, sinon 1
  let page = parseInt(req.query.page || 1);
  // idem si present on prend la valeur, sinon 10
  let pagesize = parseInt(req.query.pagesize || 10);

  mongoDBModule.getCases(page, pagesize, function(data) {
    var objdData = {
      msg:"Cas recherchés avec succès",
      data: data
    }
    res.send(JSON.stringify(objdData));
  });
});

// On va récupérer des cas par un GET (standard REST)
// cette fonction d'API peut accepter des paramètres
// pagesize = nombre de cas par page
// page = no de la page
// Oui, on va faire de la pagination, pour afficher
// par exemple les cas 10 par 10
app.get('/api/temoignage', function(req, res) {
  // Si présent on prend la valeur du param, sinon 1
  let page = parseInt(req.query.page || 1);
  // idem si present on prend la valeur, sinon 10
  let pagesize = parseInt(req.query.pagesize || 10);

  mongoDBModule.getTestimonies(page, pagesize, function(data) {
    var objdData = {
      msg:"Temoignages recherchés avec succès",
      data: data
    }
    res.send(JSON.stringify(objdData));
  });
});

// Récupération d'un seul cas par son id
  app.get('/api/cas/:id', function(req, res) {
    var id = req.params.id;

    mongoDBModule.findCaseById(id, function(data) {
      res.send(JSON.stringify(data));
    });
});

// Récupération d'un seul temoignage par son id
app.get('/api/temoignage/:id', function(req, res) {
  var id = req.params.id;

  mongoDBModule.findTemById(id, function(data) {
    res.send(JSON.stringify(data));
  });
});
