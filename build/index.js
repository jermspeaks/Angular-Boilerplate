'use strict';

angular.module('topicGraphEditor', ['ui.router'])
    // Configuration
    .config(require('./routes'))

    // Concept Controllers
    .controller('ConceptOverviewController', require('./src/concept/ConceptOverviewController'))
    .controller('ConceptNewController', require('./src/concept/ConceptNewController'))
    .controller('ConceptSearchController', require('./src/concept/ConceptSearchController'))

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');
