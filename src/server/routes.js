'use strict';

// var path = require( 'path' );
// var express = require( 'express' );

module.exports = function(app) {

  app.get('/', (req, res) => {
    console.log('You have hit the backend url');
    console.log('dir: ', __dirname);
    res.sendFile(__dirname, 'index.html');
  });

  // app.use(PATH_PREFIX + '/api/chatDatabase', forceAuth, authenticate, require('./api/chatDatabase'));
}
