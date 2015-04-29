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

    // Directives
    // .directive('googleMaps', require('./src/common/directives/googleMaps'))
    .directive('tagInput', require('./src/common/directives/tagInput'))

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');

},{"./routes":3,"./src/common/RootScopeService":4,"./src/common/directives/tagInput":5,"./src/concept/ConceptEditController":6,"./src/concept/ConceptNewController":7,"./src/concept/ConceptOverviewController":8,"./src/concept/ConceptSearchController":9,"./src/concept/ConceptSearchResultsController":10,"./src/concept/ConceptViewController":11,"templates":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("common/directive-tag-input.html","<div class=\"tag-input\">\n\n</div>\n");
$templateCache.put("concept/concept.delete.html","<header class=\"concept-header\">\n    <span>Delete a concept</span>\n</header>\n\n\n<p>FORM PENDING</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <form name=\"conceptNewForm\" ng-submit=\"submitNewConcept(conceptNewForm.$valid)\" novalidate>\n        <fieldset class=\"conceptNewForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptNewForm.conceptName.$error\" ng-if=\"conceptNewForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"Categories\">Categories</label>\n                <input\n                    name=\"Categories\"\n                    type=\"text\"\n                    id=\"Categories\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.categories\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n\n                <tag-input id=\"categories-tag\" ng-model=\"form.categories\"></tag-input>\n            </div> <!-- /.field -->\n\n            <div id=\"field\"> <!-- TODO Make this, and the lat/long into a directive -->\n                <label for=\"geoCoordinates\">GEO Coordinates</label>\n                <input\n                    name=\"geoCoordinates\"\n                    id=\"map-autocomplete\"\n                    placeholder=\"Autocomplete: Enter a place\"\n                    ng-model=\"form.address\"\n                    type=\"text\"\n                    autofocus=\"autofocus\"></input>\n            </div>\n            <section id=\"disabled-lat-long\" ng-if=\"place\">\n                <div class=\"lat-long-coordinates\" id=\"field\">\n                    <label for=\"latitude\">Latitude</label>\n                    <input\n                        name=\"latitude\"\n                        ng-model=\"form.latitude\"\n                        type=\"text\"\n                        autofocus=\"autofocus\"\n                        disabled></input>\n                </div>\n                <div class=\"lat-long-coordinates\" id=\"field\">\n                    <label for=\"longitude\">Longitude</label>\n                    <input\n                        name=\"longitude\"\n                        ng-model=\"form.longitude\"\n                        type=\"text\"\n                        autofocus=\"autofocus\"\n                        disabled></input>\n                </div>\n            </section>\n\n            <div id=\"field\">\n                <label for=\"associatedform\">Associated Forms</label>\n\n                <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.associatedForms\"> <!-- TODO Make these into form directives -->\n                    <!-- <section>\n                        <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                    </section> -->\n                    <fieldset class=\"form-field\">\n                        <label for=\"associatedform\">Form Name</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"associatedform.name\"\n                            name=\"associatedForm\"\n                            placeholder=\"Enter a form\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n\n                        <label for=\"associatedform\">Number of occurrences</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"associatedform.occurenceCount\"\n                            name=\"associatedForm\"\n                            placeholder=\"\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n\n                        <label for=\"associatedform\">Number of times linked</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"associatedform.linkedCount\"\n                            name=\"associatedForm\"\n                            placeholder=\"\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n\n                        <label for=\"associatedform\">Linked probability</label> <!-- TODO replace with sliders in its own section at the end of the form -->\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"associatedform.linkedProbability\"\n                            name=\"associatedForm\"\n                            placeholder=\"Between 0 and 1\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n                    </fieldset>\n                    <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"deleteForm(associatedform)\">-</button>\n                </div> <!-- /.field -->\n\n                <label for=\"associatedform\">Default Associated Form (same as the concept name)</label>\n\n                <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                        <!-- <label for=\"associatedform\" ng-show=\"form.associatedForms.length === 0\">Associated Forms</label> -->\n                    <fieldset class=\"form-field\">\n                        <label for=\"associatedform\">Form Name</label>\n                        <input\n                            class=\"related-forms-item\"\n                            name=\"relatedForms\"\n                            type=\"text\"\n                            id=\"relatedForms\"\n                            placeholder=\"Disabled: same as concept name\"\n                            ng-model=\"form.conceptName\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required\n                            disabled\n                        />\n\n                        <label for=\"associatedform\">Number of occurrences</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"form.defaultForm.occurenceCount\"\n                            name=\"associatedForm\"\n                            placeholder=\"\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n\n                        <label for=\"associatedform\">Number of times linked</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"form.defaultForm.linkedCount\"\n                            name=\"associatedForm\"\n                            placeholder=\"\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n\n                        <label for=\"associatedform\">Linked probability</label>\n                        <input type=\"text\"\n                            class=\"related-forms-item\"\n                            ng-model=\"form.defaultForm.linkedProbability\"\n                            name=\"associatedForm\"\n                            placeholder=\"Between 0 and 1\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required />\n                    </fieldset>\n                    <button type=\"button\" ng-click=\"addForm()\">+</button> <!-- TODO ng-click=\"addForm()\" -->\n                </div> <!-- /.field -->\n            </div>\n\n            <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n                <label for=\"relatedConcept\" ng-show=\"$first\">Related Concepts</label>\n                <input type=\"text\"\n                    class=\"related-concepts-item\"\n                    ng-model=\"relatedConcept.name\"\n                    name=\"relatedConcept\"\n                    placeholder=\"Enter the concept display name\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-show=\"!$last\" ng-click=\"deleteConcept(relatedConcept)\">-</button>\n                <button type=\"button\" type=\"value\" ng-show=\"$last\" ng-click=\"addConcept(relatedConcept)\">+</button>\n            </div> <!-- /.field -->\n\n            <!-- <div class=\"field related-concepts\">\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button>\n            </div> -->\n\n            <div class=\"field\">\n                <label for=\"select\">Concept Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"field\" ng-if=\"form.entity.name === \'Event\'\">\n                <div class=\"field\">\n                    <label for=\"eventName\">Event Name</label>\n                    <input\n                        name=\"eventName\"\n                        type=\"text\"\n                        id=\"eventName\"\n                        placeholder=\"Enter the event name\"\n                        ng-model=\"form.eventName\"\n                        autocapitalize=\"off\"\n                        autocorrect=\"off\"\n                        autofocus=\"autofocus\"\n                    />\n                </div> <!-- /.field -->\n            </div>\n\n            <div class=\"field\">\n                <label for=\"select\">Is Block Listed?</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.blocked\"\n                    ng-options=\"blockType.name for blockType in blockedTypes\"\n                    required\n                    ></select>\n            </div>\n\n\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptNewForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n\n<!--\nTODO\n\nForm to Concept link:\n\nSense probability\nNumber of occurrences\n\n-->\n");
$templateCache.put("concept/concept.search.html","<header class=\"concept-header\">\n    <span>Search for a concept</span>\n</header>\n\n<section class=\"concept-search-bar\">\n  <form name=\"conceptSearchForm\" class=\"search-bar\" role=\"search\" ng-submit=\"search(conceptSearchForm.$valid)\" novalidate>\n    <input type=\"search\" placeholder=\"Enter Search\" ng-model=\"searchQuery\" required/>\n    <button class=\"search-submit\" type=\"submit\">\n      <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png\" alt=\"Search Icon\">\n    </button>\n  </form>\n</section>\n\n<section>\n  <div ui-view></div>\n</section>\n");
$templateCache.put("concept/concept.search.list.html","<header class=\"concept-header\">\n    <span>Search Results</span>\n</header>\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"concept in model.searchList\">\n      <td>{{concept.name}}</td>\n      <td><button ng-click=\"viewConcept(concept.id)\">View</button><button ng-click=\"editConcept(concept.id)\">Edit</button><button ng-click=\"deleteConcept(concept.id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n");
$templateCache.put("concept/concept.update.html","<header class=\"concept-header\">\n    <span>Update for a concept</span>\n</header>\n\n<section>\n  <div><button class=\"sm-button\" ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n<section>\n    <form name=\"conceptEditForm\" ng-submit=\"submitEditedConcept(conceptEditForm.$valid)\" novalidate>\n        <fieldset class=\"conceptEditForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptEditForm.conceptName.$error\" ng-if=\"conceptEditForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.associatedForms\"> <!-- TODO Make these into form directives -->\n                <label for=\"associatedform\" ng-show=\"$first\">Associated Forms</label>\n                <!-- <section>\n                    <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                </section> -->\n                <input type=\"text\"\n                    class=\"related-forms-item\"\n                    ng-model=\"associatedform.name\"\n                    name=\"associatedForm\"\n                    placeholder=\"Enter a form\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"deleteForm(associatedform)\">-</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"associatedform\" ng-show=\"form.associatedForms.length === 0\">Associated Forms</label>\n                <input\n                    class=\"related-forms-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"Disabled: same as concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                    disabled\n                />\n                <button type=\"button\" ng-click=\"addForm()\">+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n                <label for=\"relatedConcept\" ng-show=\"$first\">Related Concepts</label>\n                <input type=\"text\"\n                    class=\"related-concepts-item\"\n                    ng-model=\"relatedConcept.name\"\n                    name=\"relatedConcept\"\n                    placeholder=\"Enter the concept display name\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-show=\"!$last\" ng-click=\"deleteConcept(relatedConcept)\">-</button>\n                <button type=\"button\" type=\"value\" ng-show=\"$last\" ng-click=\"addConcept(relatedConcept)\">+</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptEditForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.view.html","<header class=\"concept-header\">\n    <span>View Concept</span>\n</header>\n\n<section>\n  <div><button class=\"sm-button\" ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Key</th>\n      <th>Values</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>ID</td>\n      <td>{{concept.id}}</td>\n    </tr>\n    <tr>\n      <td>Name</td>\n      <td>{{concept.name}}</td>\n    </tr>\n    <tr>\n      <td>Display Name</td>\n      <td>{{concept.displayName}}</td>\n    </tr>\n    <tr>\n      <td>Associated Forms</td>\n      <td>\n        <ul>\n          <li ng-repeat=\"form in concept.forms\">\n            <span>{{form.name}}</span>\n          </li>\n        </ul>\n      </td>\n    </tr>\n    <tr>\n      <td>Related Concepts</td>\n      <td>\n        <ul>\n          <li ng-repeat=\"concept in concept.relatedConcepts\">\n            <span>{{concept.name}}</span>\n          </li>\n        </ul>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Pending:</p>\n\n<p>Include: Show Related Concepts (This is where we will have a d3.js Graphic)</p>\n<p>Include: Show Forms of Related Concepts</p>\n");}]);
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

// Multi series bar chart
module.exports = function($log, $parse) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {},
		compile: function(element, attrs) {
			var modelAccessor = $parse(attrs.ngModel);
			var html = '<input name="tags" id="' + attrs.id + '" value="foo,bar,baz" />';

			var newElem = $(html);
			element.replaceWith(newElem);

			return function ($scope, $element, $attrs, controller) { // Link Function

				/*
					jQuery Tags Input Options
					{
					   'autocomplete_url': url_to_autocomplete_api,
					   'autocomplete': { option: value, option: value},
					   'height':'100px',
					   'width':'300px',
					   'interactive':true,
					   'defaultText':'add a tag',
					   'onAddTag':callback_function,
					   'onRemoveTag':callback_function,
					   'onChange' : callback_function,
					   'delimiter': [',',';'],
					   'removeWithBackspace' : true,
					   'minChars' : 0,
					   'maxChars' : 0, //if not provided there is no limit
					   'placeholderColor' : '#666666'
					}
				*/

				function onAddTag() {
					$scope.$apply(function (scope) {
						var tag = [];
						modelAccessor.assign(scope, tag)
					});
				}

				function onRemoveTag() {
					$scope.$apply(function (scope) {
						var tag = [];
						modelAccessor.assign(scope, tag)
					});
				}

				$scope.options = {
				   'height':'100px',
				   'width':'300px',
				   'defaultText':'Add a category',
				   'onAddTag': onAddTag,
				   'onRemoveTag':onRemoveTag
				};

				$log.debug($element);
	            $($element).tagsInput($scope.options);

	            // scope.$watch(modelAccessor, function (val) {
	            //    var date = new Date(val);
	            //    element.tagsInput("setDate", date);
	            // });

	         };
		},
		// templateUrl: 'common/directive-tag-input',
		// controller: function($scope) {
		// 	$scope.model = {};
		// 	$log.debug('yes?');
		// }
	};
};

},{}],6:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope, $state, RootScopeService) {
    $log.log('ConceptEditController');
    // _______________
    // Scope Variables
    $scope.form = {
        associatedForms: [{
            id: 'Form 1'
        }],
        relatedConcepts: [{
            id: 'Concept 1'
        }]
    };

    $scope.supportedEntities = [{
        name: 'Person'
    }, {
        name: 'Thing'
    }, {
        name: 'Location'
    }];

    $scope.backToSearch = function() {
        $log.debug('Back To Concept Search Results');
        var search = RootScopeService.getSearch();

        if (search) {
            $state.transitionTo('concept.find.list', {q: search}); // TODO Can't figure out why the url won't change
            // $state.go('concept.find.list', {q: search});
        } else {
            $state.go('concept.find');
        }
    };

    $scope.addConcept = function() {
        $log.debug('Adding Concept Field');

        var newItemNo = $scope.form.relatedConcepts.length + 1;

        $scope.form.relatedConcepts.push({'id':'Form ' + newItemNo});
    };

    $scope.deleteConcept = function(relatedConcept) {
        $log.debug('Deleting Concept Field');
        $scope.form.relatedConcepts = _.reject($scope.form.relatedConcepts, function(rConcept) {
            return rConcept.$$hashKey === relatedConcept.$$hashKey;
        });
    };

    $scope.addForm = function() {
        $log.debug('Adding Form Field');

        var newItemNo = $scope.form.associatedForms.length + 1;

        $scope.form.associatedForms.push({'id':'Form ' + newItemNo});
    };

    $scope.deleteForm = function(associatedForm) {
        $log.debug('Deleting Form Field');
        $scope.form.associatedForms = _.reject($scope.form.associatedForms, function(aForm) {
            return aForm.$$hashKey === associatedForm.$$hashKey;
        });
    };

    $scope.submitEditedConcept = function() {
        $log.debug('Scope form data');
        $log.debug($scope.form);
    };

};

},{}],7:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
	// _______________
	// Scope Variables
	$scope.form = {
		associatedForms: [{
			id: 'Form 1'
		}],
		relatedConcepts: [{
			id: 'Concept 1'
		}]
	};

	$scope.form.defaultForm = {};

	$scope.supportedEntities = [{
		name: 'Person'
	}, {
		name: 'Place'
	}, {
		name: 'Organization'
	}, {
		name: 'Event'
	}];

	$scope.blockedTypes = [{
		name: 'Yes'
	}, {
		name: 'No'
	}];

	$scope.form.entity = $scope.supportedEntities[0];
	$scope.form.blocked = $scope.blockedTypes[1];

	$scope.autocomplete = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */
		(document.getElementById('map-autocomplete')), {
			types: ['geocode']
		});

	google.maps.event.addListener($scope.autocomplete, 'place_changed', function() {
		fetchLatLongData();
	});

	// _______________
	// Scope Functions

	// TODO add weights to forms

	$scope.addConcept = function() {
		$log.debug('Adding Concept Field');

		var newItemNo = $scope.form.relatedConcepts.length + 1;

		$scope.form.relatedConcepts.push({
			'id': 'Form ' + newItemNo
		});
	};

	$scope.deleteConcept = function(relatedConcept) {
		$log.debug('Deleting Concept Field');
		$scope.form.relatedConcepts = _.reject($scope.form.relatedConcepts, function(rConcept) {
			return rConcept.$$hashKey === relatedConcept.$$hashKey;
		});
	};

	$scope.addForm = function() {
		$log.debug('Adding Form Field');

		var newItemNo = $scope.form.associatedForms.length + 1;

		$scope.form.associatedForms.push({
			'id': 'Form ' + newItemNo
		});
	};

	$scope.deleteForm = function(associatedForm) {
		$log.debug('Deleting Form Field');
		$scope.form.associatedForms = _.reject($scope.form.associatedForms, function(aForm) {
			return aForm.$$hashKey === associatedForm.$$hashKey;
		});
	};

	$scope.submitNewConcept = function() {
		$log.debug('Scope form data');
		$log.debug($scope.form);
	};

    function fetchLatLongData() {
		// Fetch Place Location data from Google
        $scope.place = $scope.autocomplete.getPlace();

		/*jshint camelcase: false */
		// Fetch address and update the form
		$scope.address = $scope.place.formatted_address;
		/*jshint camelcase: true */

		// Split Lat/Long data into array
		var latLongList = $scope.place.geometry.location.toString().split(/, /);

		// Parse the array strings with regex for proper number format
		latLongList = _.map(latLongList, function(/* @type String*/ coord) {
			return coord.replace(/\(?(-?\d+\.\d+)\)?/, '$1');
		});

		// Set Lat/Long in form
		$scope.form.latitude = parseFloat(latLongList[0]);
		$scope.form.longitude = parseFloat(latLongList[1]);

		// Apply changes for the view to update the changes in $scope.form object
		$scope.$apply();
    }

};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
            response.push({
                name: chance.word(),
                id: chance.integer({min: 2, max: 200}).toString()
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

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope, $state, RootScopeService) {
    $log.log('ConceptViewController');
    // _______________
    // Scope Variables
    $scope.concept = {};

    $scope.backToSearch = function() {
        $log.debug('Back To Concept Search Results');
        var search = RootScopeService.getSearch();

        if (search) {
            $state.transitionTo('concept.find.list', {q: search}); // TODO Can't figure out why the url won't change
            // $state.go('concept.find.list', {q: search});
        } else {
            $state.go('concept.find');
        }
    };

    function loadConceptView() {
        $scope.concept.id = $state.params.id;

        function fetchConceptDetails() {
            var forms = [];
            var relatedConcepts = [];

            for (var i = 0; i < 5; i++) {
                forms.push({
                    name: chance.word()
                });

                relatedConcepts.push({
                    name: chance.word() + ' ' + chance.word()
                });
            }

            return {
                name: chance.word(),
                displayName: chance.word(),
                forms: forms,
                relatedConcepts: relatedConcepts
            };
        }

        var response = fetchConceptDetails();
        $scope.concept.name = response.name;
        $scope.concept.displayName = response.displayName;
        $scope.concept.forms = response.forms;
        $scope.concept.relatedConcepts = response.relatedConcepts;
    }

    loadConceptView();
    $log.debug($scope.concept);
};

},{}]},{},[1]);
