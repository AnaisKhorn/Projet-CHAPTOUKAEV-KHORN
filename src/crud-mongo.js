var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'db';

exports.connexionMongo = function(callback) {
  MongoClient.connect(url, function(err, client) {
    console.log(client);
    var db = client.db(dbName);

    assert.equal(null, err);
    callback(err, db);
  });
}

exports.findCases = function(page, pagesize, callback){
  MongoClient.connect(url, function (err, client) {
    console.log("pagesize = " + pagesize);
    console.log("page = " + pagesize);

    var db = client.db(dbName);

    console.log("db " + db);
    if(!err){
      db.collection('cas')
        .find()
        .skip(page*pagesize)
        .limit(pagesize)
        .toArray()
        .then(arr => callback(arr));
    } else {
      callback(-1);
    }
  });
};

exports.findCasesById = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    var db = client.db(dbName);
    if(!err){

      let myquery = {"_id": ObjectId(id)};

      db.collection('cas')
        .findOne(myquery, function(err, data){
          let reponse;

          if(!err){
            reponse = {
              succes: false,
              cas: data,
              error: err,
              msg: "Détails du cas envoyé"
            };
          } else {
            reponse = {
              succes: false,
              cas: null,
              error: err,
              msg: "Erreur lors du find"
            };
          }
          callback(reponse);
        });
    } else {
      let reponse = reponse = {
        succes: false,
        cas: null,
        error: err,
        msg: "Erreur de connexion à la base"
      };
    }
      callback(reponse);
  });
};

exports.findTestimonies = function(page, pagesize, callback){
  MongoClient.connect(url, function (err, client) {
    console.log("pagesize = " + pagesize);
    console.log("page = " + pagesize);

    var db = client.db(dbName);

    console.log("db " + db);
    if(!err){
      db.collection('temoignage')
        .find()
        .skip(page*pagesize)
        .limit(pagesize)
        .toArray()
        .then(arr => callback(arr));
    } else {
      callback(-1);
    }
  });
};

exports.findTestimoniesById = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    var db = client.db(dbName);
    if(!err){

      let myquery = {"_id": ObjectId(id)};

      db.collection('temoignage')
        .findOne(myquery, function(err, data){
          let reponse;

          if(!err){
            reponse = {
              succes: false,
              cas: data,
              error: err,
              msg: "Détails du témoignage envoyé"
            };
          } else {
            reponse = {
              succes: false,
              cas: null,
              error: err,
              msg: "Erreur lors du find"
            };
          }
          callback(reponse);
        });
    } else {
      let reponse = reponse = {
        succes: false,
        cas: null,
        error: err,
        msg: "Erreur de connexion à la base"
      };
    }
    callback(reponse);
  });
};
