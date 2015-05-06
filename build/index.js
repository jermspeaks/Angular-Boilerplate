'use strict';

angular.module('topicGraphEditor', ['ui.router', 'ngMessages'])
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

    // Common Models
    .factory('FormService', require('./src/common/FormService'))

    // Directives
    .directive('googleMapsAutocomplete', require('./src/common/directives/googleMapsAutocomplete'))
    .directive('tagInput', require('./src/common/directives/tagInput'))
    .directive('conceptPreview', require('./src/common/directives/conceptPreview'))

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');
