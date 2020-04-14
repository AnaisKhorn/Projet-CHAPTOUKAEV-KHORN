const express  = require('express');
const app      = express();
const port     = process.env.PORT || 8080;
const server   = require('http').Server(app);
// Pour les formulaires standards
const bodyParser = require('body-parser');

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(__dirname + '/public'));
// Paramètres standards du modyle bodyParser
// qui sert à récupérer des paramètres reçus
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  res.send("Test de connexion");
});

// On va récupérer des cas par un GET (standard REST)
// cette fonction d'API peut accepter des paramètres
// pagesize = nombre de cas par page
// page = no de la page
// Oui, on va faire de la pagination, pour afficher
// par exemple les restaurants 10 par 10
app.get('/api/cas', function(req, res) {
  // Si présent on prend la valeur du param, sinon 1
  let page = req.query.page || 1;
  // idem si present on prend la valeur, sinon 10
  let pagesize = req.query.pagesize || 10;

  // On simule une réponse
  let message = "<h1>/api/cas: on demande des cas";
  message += " avec ces params:</h1>";
  message += "<ul><li>Nb = " + pagesize + "</li><li>Page ";
  message += page + "</li></ul>";

  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

// Récupération d'un seul cas par son id
app.get('/api/cas/:id', function(req, res) {
  var id = req.params.id;

  // On simule une réponse
  let message = "<h1>/api/cas/" + id + " : on demande "
  message += " le détail du cas par son id=" + id +"</h1>";

  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

app.get('/api/temoignage', function(req, res) {
  // Si présent on prend la valeur du param, sinon 1
  let page = req.query.page || 1;
  // idem si present on prend la valeur, sinon 10
  let pagesize = req.query.pagesize || 10;

  // On simule une réponse
  let message = "<h1>/api/temoignage: on demande des temoignages";
  message += " avec ces params:</h1>";
  message += "<ul><li>Nb = " + pagesize + "</li><li>Page ";
  message += page + "</li></ul>";

  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

// Récupération d'un ensemble de temoignages par son id de cas
app.get('/api/temoignage/:id', function(req, res) {
  var id = req.params.id;

  // On simule une réponse
  let message = "<h1>/api/temoignage/" + id + " : on demande "
  message += " le détail du temoignage par son id=" + id +"</h1>";

  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

app.get('/api/cas/searchByName/:name', function(req, res) {
  var nom_dossier = req.params.name;

  // On simule une réponse
  let message = "<h1>/api/cas: on recherche des cas";
  message += " avec ces params:</h1>";
  message += "<ul><li>Nom = " + nom_dossier + "</li><li>";


  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

app.get('/api/cas/search/:date', function(req, res) {
  var date_cas = req.params.date;

  // On simule une réponse
  let message = "<h1>/api/cas: on recherche des cas";
  message += " avec ces params:</h1>";
  message += "<ul><li>Date = " + date_cas + "</li><li>";


  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});

app.get('/api/cas/search/:type', function(req, res) {
  var type_cas = req.params.type;

  // On simule une réponse
  let message = "<h1>/api/cas: on recherche des cas";
  message += " avec ces params:</h1>";
  message += "<ul><li>Type = " + type_cas + "</li><li>";

  let reponse = {
    msg : message
  }
  res.send(JSON.stringify(reponse));
});
