'use strict';

angular.module('topicGraphEditor', ['ui.router'])
    // Configuration
    .config(require('./routes'))

    // Concept Controllers
    .controller('ConceptOverviewController', require('./src/concept/ConceptOverviewController'))
    .controller('ConceptNewController', require('./src/concept/ConceptNewController'))
    .controller('ConceptSearchController', require('./src/concept/ConceptSearchController'))
    .controller('ConceptSearchResultsController', require('./src/concept/ConceptSearchResultsController'))
    .controller('ConceptViewController', require('./src/concept/ConceptViewController'))
    .controller('ConceptEditController', require('./src/concept/ConceptEditController'))


    // Common Services
    .factory('RootScopeService', require('./src/common/RootScopeService'))

    // Directives
    // .directive('googleMaps', require('./src/common/directives/googleMaps'))

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');
