'use strict';

/* Require all components in order to initialize application
 * and set up the single page app.
 */

// config and app
var config = require('./config');
var app = require('./app');

// router
var router = require('./router');

// controllers
var HomeCtrl = require('./controllers/HomeCtrl');
var EtiquetteCtrl = require('./controllers/EtiquetteCtrl');
var FAQCtrl = require('./controllers/FAQCtrl');
var MapCtrl = require('./controllers/MapCtrl');

// load images
var Loader = require('./core/Loader');
var loader = new Loader(config.manifest);

