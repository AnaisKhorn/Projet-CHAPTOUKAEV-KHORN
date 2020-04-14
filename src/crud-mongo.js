var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var assert = require('assert');
//var url = 'mongodb://localhost:27017/db';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'db';

exports.connexionMongo = function(callback) {
  MongoClient.connect(url, function(err, client) {
    var db = client.db(dbName);

    assert.equal(null, err);
    callback(err, db);
  });
}

exports.getCases = function(page, pagesize, callback) {
  MongoClient.connect(url, function(err, client) {
    console.log("pagesize = " + pagesize);
    console.log("page = " + pagesize);

    var db = client.db(dbName);

    console.log("db " + db)
    if(!err){
      db.collection('cas')
        .find()
        .skip(page*pagesize)
        .toArray()
        .then(arr => callback(arr));
    }
    else{
      callback(-1);
    }
  });
};

exports.getTestimonies = function(page, pagesize, callback) {
  MongoClient.connect(url, function(err, client) {
    console.log("pagesize = " + pagesize);
    console.log("page = " + pagesize);

    var db = client.db(dbName);

    console.log("db " + db)
    if(!err){
      db.collection('temoignages')
        .find()
        .skip(page*pagesize)
        .toArray()
        .then(arr => callback(arr));
    }
    else{
      callback(-1);
    }
  });
};

exports.findCaseById = function(id, callback) {
  MongoClient.connect(url, function (err, client) {
    var db = client.db(dbName);
    if (!err) {
      // La requete mongoDB

      let myquery = {"_id": ObjectId(id)};

      db.collection("cas")
        .findOne(myquery, function (err, data) {
          let reponse;

          if (!err) {
            reponse = {
              succes: true,
              cas: data,
              error: null,
              msg: "Details du cas envoyé"
            };
          } else {
            reponse = {
              succes: false,
              cas: null,
              error: err,
              msg: "erreur lors du find"

            };
          }
          callback(reponse);
        });
    } else {
      let reponse = reponse = {
        succes: false,
        cas: null,
        error: err,
        msg: "erreur de connexion à la base"
      };
      callback(reponse);
    }
  });
};

  exports.findTemById = function (id, callback) {
    MongoClient.connect(url, function (err, client) {
      var db = client.db(dbName);
      if (!err) {
        // La requete mongoDB

        let myquery = {id_cas_tem: id};

        db.collection("temoignages")
          .find(myquery)
          .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
          });
      }
    });
  };

    exports.searchName = function (nom_dossier, callback) {
      MongoClient.connect(url, function (err, client) {
        var db = client.db(dbName);
        if (!err) {
          // La requete mongoDB

          let myquery = {cas_nom_dossier: '%' + nom_dossier.toLowerCase() + '%'}

          db.collection("cas")
            .find(myquery)
            .toArray(function (err, result) {
              if (err) throw err;
              console.log(result);
              callback(result);
            });
        }
      });
    };

    exports.searchDate = function (date_cas, callback) {
      MongoClient.connect(url, function (err, client) {
        var db = client.db(dbName);
        if (!err) {
          // La requete mongoDB

          let myquery = {cas_AAAA: '%' + date_cas + '%'}

          db.collection("cas")
            .find(myquery)
            .toArray(function (err, result) {
              if (err) throw err;
              console.log(result);
              callback(result);
            });
        }
      });
    };

    exports.searchType = function (type_cas, callback) {
      MongoClient.connect(url, function (err, client) {
        var db = client.db(dbName);
        if (!err) {
          // La requete mongoDB

          let myquery = {cas_classification: '%' + type_cas + '%'}

          db.collection("cas")
            .find(myquery)
            .toArray(function (err, result) {
              if (err) throw err;
              console.log(result);
              callback(result);
            });
        }
      });
    };


