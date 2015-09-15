'use strict';

// require config and app
var config = require('./config');
var app = require('./app');

// load images

var Loader = require('./core/Loader');
var loader = new Loader(config.manifest);
