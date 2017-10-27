'use strict';

// var path = require( 'path' );
// var express = require( 'express' );

module.exports = function(app) {

  app.get('/', (req, res) => {
    console.log('You have hit the backend url');
  });

  // app.use(PATH_PREFIX + '/api/chatDatabase', forceAuth, authenticate, require('./api/chatDatabase'));
}
