'use strict';

angular.module('topicGraphEditor', ['ui.router'])
    // Configuration
    .config(require('./routes'))

    // Controllers
    .controller('MainController', require('./src/common/MainController'))

    // Concept Controllers
    .controller('ConceptNewController', require('./src/concept/ConceptNewController'))

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');
