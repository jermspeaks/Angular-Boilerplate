(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');

},{"./routes":3,"./src/common/RootScopeService":4,"./src/concept/ConceptEditController":5,"./src/concept/ConceptNewController":6,"./src/concept/ConceptOverviewController":7,"./src/concept/ConceptSearchController":8,"./src/concept/ConceptSearchResultsController":9,"./src/concept/ConceptViewController":10,"templates":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("concept/concept.delete.html","<header class=\"concept-header\">\n    <span>Delete a concept</span>\n</header>\n\n\n<p>FORM PENDING</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <form name=\"conceptNewForm\" ng-submit=\"submitNewConcept(conceptNewForm.$valid)\" novalidate>\n        <fieldset class=\"conceptNewForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptNewForm.conceptName.$error\" ng-if=\"conceptNewForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"relatedForms\">Related Forms</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"\"\n                    ng-model=\"form.forms\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button ng-click=\"removeConcept()\" style=\"background:#FF6666;\">-</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <!-- <label for=\"relatedForms\">Related Forms</label> -->\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"Same as concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                    disabled\n                />\n                <button ng-click=\"addConcept()\">+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\"> <!-- Duplicate this as a directive. TODO Make autocomplete -->\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button> <!-- TODO ng-click=\"addConcept()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptNewForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.search.html","<header class=\"concept-header\">\n    <span>Search for a concept</span>\n</header>\n\n<section class=\"concept-search-bar\">\n  <form name=\"conceptSearchForm\" class=\"search-bar\" role=\"search\" ng-submit=\"search(conceptSearchForm.$valid)\" novalidate>\n    <input type=\"search\" placeholder=\"Enter Search\" ng-model=\"searchQuery\" required/>\n    <button class=\"search-submit\" type=\"submit\">\n      <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png\" alt=\"Search Icon\">\n    </button>\n  </form>\n</section>\n\n<section>\n  <div ui-view></div>\n</section>\n");
$templateCache.put("concept/concept.search.list.html","<header class=\"concept-header\">\n    <span>Search Results</span>\n</header>\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"concept in model.searchList\">\n      <td>{{concept.name}}</td>\n      <td><button ng-click=\"viewConcept(concept.id)\">View</button><button ng-click=\"editConcept(concept.id)\">Edit</button><button ng-click=\"deleteConcept(concept.id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n");
$templateCache.put("concept/concept.update.html","<header class=\"concept-header\">\n    <span>Update for a concept</span>\n</header>\n\n<section>\n    <form name=\"conceptEditForm\" ng-submit=\"submitNewConcept(conceptEditForm.$valid)\" novalidate>\n        <fieldset class=\"conceptEditForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptEditForm.conceptName.$error\" ng-if=\"conceptEditForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"relatedForms\">Related Forms</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\"> <!-- Duplicate this as a directive. TODO Make autocomplete -->\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button> <!-- TODO ng-click=\"addConcept()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptEditForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.view.html","<header class=\"concept-header\">\n    <span>View Concept</span>\n</header>\n\n<section>\n  <div><button ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n<section><p>Pending:</p>\n\n  <p>Back To Search</p>\n  <p>Include: View Attributes</p>\n  <p>Include: Show Forms</p>\n  <p>Include: Show Related Concepts (This is where we will have a d3.js Graphic)</p>\n  <p>Include: Show Forms of Related Concepts</p>\n</section>\n");}]);
; browserify_shim__define__module__export__(typeof templates != "undefined" ? templates : window.templates);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
'use strict';

module.exports =
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);

        var pages = {
            concept: {
                main: {
                    url: '/',
                    templateUrl: 'concept/concept.html',
                    controller: 'ConceptOverviewController'
                },
                new: {
                    url: 'concept/new',
                    templateUrl: 'concept/concept.new.html',
                    controller: 'ConceptNewController'
                },
                search: {
                    url: 'concept/find',
                    templateUrl: 'concept/concept.search.html',
                    controller: 'ConceptSearchController'
                },
                list: {
                    url: '?q',
                    templateUrl: 'concept/concept.search.list.html',
                    controller: 'ConceptSearchResultsController'
                },
                read: {
                    url: 'concept/view/:id',
                    templateUrl: 'concept/concept.view.html',
                    controller: 'ConceptViewController'
                },
                update: {
                    url: 'concept/view/:id/edit',
                    templateUrl: 'concept/concept.update.html',
                    controller: 'ConceptEditController'
                },
                delete: {
                    url: 'concept/view/:id/delete',
                    templateUrl: 'concept/concept.delete.html',
                    // controller: 'MainController'
                }
            }
        };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('concept', pages.concept.main)
            .state('concept.new', pages.concept.new)
            .state('concept.find', pages.concept.search)
            .state('concept.find.list', pages.concept.list)
            .state('concept.view', pages.concept.read)
            .state('concept.edit', pages.concept.update)
            .state('concept.delete', pages.concept.delete)
        ;

    }];

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function($log, $rootScope) {
    // List of things kept in root scope which constitute the application context
    //
    // search: Saves the search object for concept search

    // _____________________________________
    // Configuration Settings for $rootScope

    // ___________________________________
    // Exposed RootScopeServices Functions

    return {
        saveSearch: function(searchObj) {
            $rootScope.search = searchObj;
        },
        getSearch: function() {
            return $rootScope.search;
        },
        resetSearch: function() {
            $rootScope.search = undefined;
        }
    };
};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
    $log.log('ConceptEditController');
    // _______________
    // Scope Variables
    $scope.model = {};

};

},{}],6:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    $scope.form = {};

    $scope.supportedEntities = [{
        name: 'Person'
    }, {
        name: 'Thing'
    }, {
        name: 'Location'
    }];

    // _______________
    // Scope Functions

    $scope.addConcept = function() {
      $log.debug('Adding Form Field');
    };

    $scope.deleteConcept = function() {

    };

    $scope.submitNewConcept = function() {
        $log.debug('Scope form data');
        $log.debug($scope.form);
    };

};

},{}],7:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    $scope.model = {
        editors: [{
            name: 'create',
            displayName: 'Create a Concept',
            link: 'concept.new'
        }, {
            name: 'read',
            displayName: 'Search for a Concept',
            link: 'concept.find'
        }]
        // {
        //     name: 'update',
        //     displayName: 'Edit a Concept',
        //     link: 'concept.edit'
        // }, {
        //     name: 'delete',
        //     displayName: 'Delete a Concept',
        //     link: 'concept.delete'
        // }]
    };

};

},{}],8:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope, $state, $location, RootScopeService) {
    $log.log('ConceptSearchController');
    // _______________
    // Scope Variables
    $scope.model = {};

    // Return search
    $scope.search = function() {
        $log.debug('Search: %s', $scope.searchQuery);

        // Send Search to back and wait for response
        // fetchSearchResults();
        RootScopeService.saveSearch($scope.searchQuery);

        // TODO Loading Bar
        // Defer until search goes through
        $state.go('concept.find.list', {q: $scope.searchQuery});
    };

    // $scope.viewConcept = function(id) {
    //     $log.debug('View %s', id);
    //     $state.transitionTo('concept.view', { id: id });
    // };
    //
    // $scope.editConcept = function(id) {
    //     $log.debug('Edit %s', id);
    //     $state.transitionTo('concept.edit', { id: id });
    // };
    //
    // $scope.deleteConcept = function(id) {
    //     $log.debug('Delete %s', id);
    //     $state.transitionTo('concept.delete', { id: id });
    // };
    //
    // function fetchSearchResults() {
    //     function findSearchQuery() {
    //         return [{
    //             name: 'One',
    //             id: '1'
    //         }, {
    //             name: 'Two',
    //             id: '2'
    //         }, {
    //             name: 'Three',
    //             id: '3'
    //         }];
    //     }
    //
    //     var response = findSearchQuery();
    //     $scope.model.searchList = response;
    // }


    if ($location.search().q) {
        $scope.searchQuery = $location.search().q;
        RootScopeService.saveSearch($scope.searchQuery);
        $state.go('concept.find.list', {
            q: $scope.searchQuery
        });
    }

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope, $state, $stateParams) {
    $log.log('ConceptSearchResultsController');
    // _______________
    // Scope Variables
    $scope.model = {};

    $scope.viewConcept = function(id) {
        $log.debug('View %s', id);
        $state.transitionTo('concept.view', { id: id });
    };

    $scope.editConcept = function(id) {
        $log.debug('Edit %s', id);
        $state.transitionTo('concept.edit', { id: id });
    };

    $scope.deleteConcept = function(id) {
        $log.debug('Delete %s', id);
        $state.transitionTo('concept.delete', { id: id });
    };

    function fetchSearchResults() {
        function findSearchQuery() {
            return [{
                name: 'One',
                id: '1'
            }];
        }

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }

        var response = findSearchQuery();
        for (var i = 0; i < getRandomInt(4, 7); i++) {
            var index = i + 2;
            response.push({
                name: chance.word(),
                id: index.toString()
            });
        }

        $scope.model.searchList = response;
    }

    if ($stateParams.q) {
        fetchSearchResults($stateParams.q);
    } else {
        $state.transitionTo('concept.find');
    }

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
    $log.log('ConceptViewController');
    // _______________
    // Scope Variables
    $scope.model = {};

    $scope.backToSearch = function() {
      $log.log('Going back to search');
    };

};

},{}]},{},[1]);
