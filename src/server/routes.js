'use strict';

// var path = require( 'path' );
// var express = require( 'express' );
const serverConfig = require('./serverConfig');

module.exports = function(app) {

  app.get('/', (req, res) => {
    console.log('You have hit the backend url');
    console.log('dir: ', __dirname);
    console.log('config: ', serverConfig);
    console.log('config: ', serverConfig.db);

    const MongoClient = require('mongodb').MongoClient;

    // Connection URL
    const url = `mongodb://${serverConfig.db.user}:${serverConfig.db.password}@ds237735.mlab.com:37735/all-our-stuffs`;
    console.log('db url: ', url);
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      console.log("err: ", err);
      // console.log("db: ", db);

      db.close();
    });

    res.sendFile(__dirname, 'index.html');
  });

  // app.use(PATH_PREFIX + '/api/chatDatabase', forceAuth, authenticate, require('./api/chatDatabase'));
}
