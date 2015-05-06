(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./routes":3,"./src/common/FormService":4,"./src/common/RootScopeService":5,"./src/common/directives/conceptPreview":6,"./src/common/directives/googleMapsAutocomplete":7,"./src/common/directives/tagInput":8,"./src/concept/ConceptEditController":9,"./src/concept/ConceptNewController":10,"./src/concept/ConceptOverviewController":11,"./src/concept/ConceptSearchController":12,"./src/concept/ConceptSearchResultsController":13,"./src/concept/ConceptViewController":14,"templates":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("common/directive-tag-input.html","<div class=\"tag-input\">\n\n</div>\n");
$templateCache.put("concept/concept.delete.html","<header class=\"concept-header\">\n    <span>Delete a concept</span>\n</header>\n\n\n<p>FORM PENDING</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.attrs.html","<label for=\"Attributes\">\n  Concept Attributes</label>\n<fieldset class=\"conceptNewForm\">\n\n  <div class=\"field\">\n    <label for=\"Categories\">Categories</label>\n\n    <tag-input id=\"categories-tag\"\n      name=\"Categories\"\n      ng-model=\"form.attributes.categories\"\n      placeholder=\"Add a category\"></tag-input>\n\n  </div>\n  <!-- /.field -->\n\n  <div id=\"field\">\n    <label for=\"geoCoordinates\">GEO Coordinates</label>\n    <input google-maps-autocomplete\n      name=\"geoCoordinates\"\n      id=\"map-autocomplete\"\n      placeholder=\"Autocomplete: Enter a place\"\n      ng-model=\"form.attributes.address\"\n      latitude=\"form.attributes.latitude\"\n      longitude=\"form.attributes.longitude\"\n      type=\"text\"\n      autofocus=\"autofocus\"></input>\n  </div>\n\n  <section id=\"disabled-lat-long\" ng-if=\"form.attributes.latitude && form.attributes.longitude\">\n    <div class=\"lat-long-coordinates\" id=\"field\">\n      <label for=\"latitude\">Latitude</label>\n      <input id=\"new-form-latitude\"\n        name=\"latitude\"\n        ng-model=\"form.attributes.latitude\"\n        type=\"text\"\n        autofocus=\"autofocus\"\n        disabled></input>\n    </div>\n    <div class=\"lat-long-coordinates\" id=\"field\">\n      <label for=\"longitude\">Longitude</label>\n      <input id=\"new-form-longitude\"\n        name=\"longitude\"\n        ng-model=\"form.attributes.longitude\"\n        type=\"text\"\n        autofocus=\"autofocus\"\n        disabled></input>\n    </div>\n  </section>\n\n  <div class=\"field\">\n    <label for=\"select\">Concept Type</label>\n    <select class=\"global-date-selector custom\"\n      ng-model=\"form.attributes.entity\"\n      ng-options=\"entityType.name for entityType in supportedEntities\"\n      required></select>\n  </div>\n\n  <div class=\"field\" ng-if=\"form.entity.name === \'Event\'\">\n    <div class=\"field\">\n      <label for=\"eventName\">Event Name</label>\n      <input id=\"new-form-event-name\"\n        name=\"eventName\"\n        type=\"text\"\n        placeholder=\"Enter the event name\"\n        ng-model=\"form.eventName\"\n        autocapitalize=\"off\"\n        autocorrect=\"off\"\n        autofocus=\"autofocus\" />\n    </div>\n    <!-- /.field -->\n  </div>\n\n  <div class=\"field\">\n    <label for=\"select\">Is Block Listed?</label>\n    <select class=\"global-date-selector custom\"\n      ng-model=\"form.attributes.blocked\"\n      ng-options=\"blockType.name for blockType in blockedTypes\"\n      required></select>\n  </div>\n  <!-- /.field -->\n\n</fieldset>\n");
$templateCache.put("concept/concept.new.forms.html","<div id=\"field\">\n  <label for=\"associatedform\">Associated Forms</label>\n\n  <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.forms\">\n    <!-- TODO Make these into form directives -->\n    <!-- <section>\n                    <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                </section> -->\n    <fieldset class=\"form-field\">\n      <label ng-if=\"associatedform.tag\" for=\"associatedform\">Form Name (Default)</label>\n      <label ng-if=\"!associatedform.tag\" for=\"associatedform\">Form Name</label>\n      <!-- Default Form form.attributes.conceptName -->\n      <input ng-if=\"associatedform.tag\" type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.name\" name=\"associatedForm\" placeholder=\"Disabled: same as concept name\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" disabled/>\n      <input ng-if=\"!associatedform.tag\" type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.name\" name=\"associatedForm\" placeholder=\"Enter a form\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n      <label for=\"associatedform\">Number of occurrences</label>\n      <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.occurenceCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n      <label for=\"associatedform\">Number of times linked</label>\n      <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.linkedCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n      <label for=\"associatedform\">Linked probability</label>\n      <!-- TODO replace with sliders in its own section at the end of the form -->\n      <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.linkedProbability\" name=\"associatedForm\" placeholder=\"Between 0 and 1\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n    </fieldset>\n    <button class=\"add-form-button\" type=\"button\" ng-click=\"form.addForm()\">+</button>\n    <button class=\"delete-button delete-form-button\" ng-if=\"!associatedform.tag\" type=\"button\" type=\"value\" ng-click=\"form.deleteForm(associatedform)\">-</button>\n  </div>\n</div>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <!-- <section id=\"new-concept-viz\" ng-if=\"form.conceptName\">\n        <header id=\"new-concept-viz-header\">{{form.conceptName}}</header>\n        <section>\n            <concept-preview concept-data=\"form\"></concept-preview>\n        </section>\n    </section> -->\n\n    <section>\n        <form name=\"conceptNewForm\" novalidate>\n            <section id=\"concept-label\">\n                <div class=\"concept-input-group\">\n                    <div class=\"concept-input-label\">\n                        <span>Concept: </span>\n                    </div>\n\n                    <div class=\"concept-input-field\">\n                        <input\n                            name=\"conceptName\"\n                            type=\"text\"\n                            id=\"conceptName\"\n                            placeholder=\"Enter a concept name\"\n                            ng-model=\"form.attributes.conceptName\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            minlength=\"3\"\n                            required\n                        />\n                    </div>\n\n                    <div class=\"ng-messages\" ng-messages=\"conceptNewForm.conceptName.$error\" ng-if=\"conceptNewForm.conceptName.$dirty && conceptNewForm.conceptName.$invalid\">\n                        <div ng-message=\"required\">A Concept is Required to start the form</div>\n                        <div ng-message=\"minlength\">The concept must be at least 3 characters</div>\n                    </div>\n\n                    <div class=\"button-bar group\" ng-if=\"form.attributes.conceptName\" style=\"float:right;\">\n                        <input id=\"btn-submit\" type=\"submit\" value=\"Submit\" ng-disabled=\"conceptNewForm.$invalid\" class=\"button\" ng-click=\"submitNewConcept(conceptNewForm.$valid)\">\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </div>\n\n            </section>\n\n            <section class=\"concept-form-section\" ng-if=\"form.attributes.conceptName\">\n                <div id=\"concept-side-menu\">\n                    <ul class=\"menu\">\n                        <li class=\"side-menu-item\" ng-repeat=\"item in sideMenu\">\n                            <span ng-if=\"item.displayName === \'Forms\'\">\n                                <button class=\"side-menu-btn edit-button\" type=\"button\" ng-click=\"editDropdown()\">{{item.displayName}}</button>\n                                <ul class=\"submenu\">\n                                    <li class=\"side-submenu-item\" ng-repeat=\"subItem in sideSubMenu\">\n                                        <button class=\"side-submenu-btn\" type=\"button\" ng-click=\"switchForm(subItem.partial)\">{{subItem.displayName}}</button>\n                                    </li>\n                                </ul>\n                            </span>\n                            <span ng-if=\"item.displayName !== \'Forms\'\">\n                                <button class=\"side-menu-btn\" ng-click=\"switchForm(item.partial)\">{{item.displayName}}</button>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n\n                <div id=\"concept-partial-form\">\n                    <div ui-view></div>\n                </div>\n            </section>\n        </form>\n    </section>\n</section>\n");
$templateCache.put("concept/concept.new.links.html","<label for=\"Related-Concepts\">Concept To Link Relations</label>\n<fieldset>\n    <div ng-repeat=\"link in form.links\">\n        <label>{{form.forms[$index].name}}</label>\n        <fieldset>\n            <div class=\"sense-probability\" id=\"field\">\n              <label for=\"senseProbability\">Sense Probability</label>\n              <input name=\"senseProbability\"\n                ng-model=\"link.senseProbability\"\n                type=\"text\"\n                autofocus=\"autofocus\"></input>\n            </div>\n\n            <div class=\"total-occurrences\" id=\"field\">\n              <label for=\"totalOccurrences\">Number of occurrences</label>\n              <input name=\"totalOccurrences\"\n                ng-model=\"link.occurrenceCount\" \n                type=\"text\" \n                autofocus=\"autofocus\"></input>\n            </div>\n        </fieldset>\n    </div>\n\n</fieldset>\n");
$templateCache.put("concept/concept.new.related-concepts.html","<label for=\"Related-Concepts\">Related Concepts</label>\n<fieldset>\n  <section>\n    <label for=\"relatedConcept\" class=\"concept-name-label\">Concept Name</label>\n    <button class=\"sm-button add-related-concept-button\" type=\"button\" type=\"value\" ng-click=\"form.addConcept(relatedConcept)\">Add Related Concept</button>\n    <div class=\"clear-float\"></div>\n  </section>\n  \n  <section>\n    <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n      <input type=\"text\" class=\"related-concepts-item\" ng-model=\"relatedConcept.name\" name=\"relatedConcept\" placeholder=\"Enter the concept display name\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n      <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"form.deleteConcept(relatedConcept)\">-</button>\n    </div>\n  </section>\n</fieldset>\n");
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
                    overview: {
                        url: 'concept/new',
                        templateUrl: 'concept/concept.new.html',
                        controller: 'ConceptNewController'
                    },
                    attrs: {
                        templateUrl: 'concept/concept.new.attrs.html'
                    },
                    forms: {
                        templateUrl: 'concept/concept.new.forms.html'
                    },
                    relatedConcepts: {
                        templateUrl: 'concept/concept.new.related-concepts.html'
                    },
                    links: {
                        templateUrl: 'concept/concept.new.links.html'
                    }
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
            .state('concept.new', pages.concept.new.overview)
            .state('concept.new.attrs', pages.concept.new.attrs)
            .state('concept.new.forms', pages.concept.new.forms)
            .state('concept.new.links', pages.concept.new.links)
            .state('concept.new.relatedConcepts', pages.concept.new.relatedConcepts)
            .state('concept.find', pages.concept.search)
            .state('concept.find.list', pages.concept.list)
            .state('concept.view', pages.concept.read)
            .state('concept.edit', pages.concept.update)
            .state('concept.delete', pages.concept.delete)
        ;

    }];

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function($log) {
    // IDEA: Might be able to utilize local session caching to save data in case user refreshes page

    // Cache for Form Fields
    var Form = function(attrs, forms, links, relatedConcepts) {
        // Attributes Object
        this.attributes = attrs || {
            conceptName: ''
        };

        this.forms = forms || [{
            tag: 'default',
            id: 'Form 1',
            name: ''
        }];

        this.links = links || [{
            tag: 'default',
            id: 'Form 1',
            senseProbability: 0,
            occurrenceCount: 0
        }];

        this.relatedConcepts = relatedConcepts || [{
            id: 'Concept 1'
        }];
    };

    // Forms

    Form.prototype.addForm = function() {
        $log.debug('Adding Form Field');

		var newItemNo = this.forms.length + 1;

		this.forms.push({
			'id': 'Form ' + newItemNo
		});

        this.addLink();
    };

    Form.prototype.deleteForm = function(associatedForm) {
        $log.debug('Deleting Form Field');

		this.forms = _.reject(this.forms, function(aForm) {
			return aForm.$$hashKey === associatedForm.$$hashKey;
		});

        this.deleteLink(associatedForm);
    };

    // Links

    Form.prototype.addLink = function() {
        $log.debug('Adding Link Field');

        var newItemNo = this.links.length + 1;

		this.links.push({
			'id': 'Form ' + newItemNo
		});
    };

    Form.prototype.deleteLink = function(associatedForm) {
        $log.debug('Deleting Link Field');

        this.links = _.reject(this.forms, function(aForm) {
			return aForm.$$hashKey === associatedForm.$$hashKey;
		});
    };

    // Related Concepts
    Form.prototype.addConcept = function() {
        $log.debug('Adding Concept Field');

		var newItemNo = this.relatedConcepts.length + 1;

        this.relatedConcepts.push({
            'id': 'Form ' + newItemNo
        });
    };

    Form.prototype.deleteConcept = function(relatedConcept) {
        $log.debug('Deleting Concept Field');

		this.relatedConcepts = _.reject(this.relatedConcepts, function(rConcept) {
			return rConcept.$$hashKey === relatedConcept.$$hashKey;
		});
    };

    // ___________________________________
    // Exposed RootScopeServices Functions

    return Form;
};

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		scope: {
			conceptData: '='
		},
		replace: true,
		transclude: false,
		template: '<div class="concept-data-viz"></div>',
		controller: function($scope, $element) {
			$log.debug('Loaded Concept Preview');
			$log.debug($scope.conceptData);

			function renderChart() {
				// Attributes
				var margin = {top: 20, right: 120, bottom: 20, left: 120},
					w = $($element).width() - margin.right - margin.left,
					h = 500 - margin.top - margin.bottom;

				// Define Tree & root
				var treeData = {
					name: 'Name of Concept',
					contents: [{
						name: 'Forms',
						contents: [{
							name: 'Example 1'
						}, {
							name: 'Example 2'
						}]
					}, {
						name: 'Related Concepts',
						contents: []
					}, {
						name: 'Form to Concept Link',
						contents: [{
							name: 'Example 1',
						}, {
							name: 'Example 2'
						}]
					}]
				};

				var options = {
					nodeRadius: 5
				};

				var tree = d3.layout.tree()
					.sort(null)
					.size([w, h - 200])
					.children(function(d) {
						return (!d.contents || d.contents.length === 0) ? null : d.contents;
					});

				var nodes = tree.nodes(treeData);
				var links = tree.links(nodes);

				/*
				    <svg>
				        <g class="container" />
				    </svg>
				*/

				// SVG Element
				var svg = d3.select('.concept-data-viz')
					.append('svg:svg')
					.attr('width', w)
					.attr('height', h)
					.append('svg:g')
					.attr('class', 'container')
					.attr('transform', 'translate(0,10)');
					// .append('g').attr('class', 'links')
					// .append('g').attr('class', 'nodes');

				// Edges between nodes as a <path class='link' />
				var link = d3.svg.diagonal()
					.projection(function(d) {
						return [d.x, d.y];
					});

				svg.selectAll('path.link')
					.data(links)
					.enter()
					.append('svg:path')
					.attr('class', 'link')
					.attr('d', link);


				/*
				    Nodes as
				    <g class="node">
				        <circle class="node-dot" />
				        <text />
				    </g>
				 */
				var nodeGroup = svg.selectAll('g.node')
					.data(nodes)
					.enter()
					.append('svg:g')
					.attr('class', 'node')
					.attr('transform', function(d) {
						return 'translate(' + d.x + ',' + d.y + ')';
					});

				nodeGroup.append('svg:circle')
					.attr('class', 'node-dot')
					.attr('r', options.nodeRadius);

				nodeGroup.append('svg:text')
					.attr('text-anchor', function(d) {
						return d.children ? 'end' : 'start';
					})
					.attr('dx', function(d) {
						var gap = 2 * options.nodeRadius;
						return d.children ? -gap : gap;
					})
					.attr('dy', 3)
					.text(function(d) {
						return d.name;
					});

				// var nodes = graph.nodes,
				//     links = graph.links;
				//
				// // Force Layout Object
				// var force = d3.layout.force()
				// 	.size([w, h])
				// 	.nodes(nodes)
				// 	.links(links)
				// 	.linkDistance(w / 3.05);
				//
				// // d3 Node & Link
				// var link = svg.selectAll('.link')
				// 	.data(links)
				// 	.enter().append('line')
				// 	.attr('class', 'link');
				//
				// var node = svg.selectAll('.node')
				// 	.data(nodes)
				// 	.enter().append('circle')
				// 	.attr('class', 'node');
			}

			// TODO
			// function updateChart() {
			//
			// }

			// Event listener to see any changes to concept data
			$scope.$watch('conceptData', function() {
				if ($scope.conceptData) {
					renderChart();
				}
			});
		}
	};
};

},{}],7:[function(require,module,exports){
'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
            ngModel: '=',
			latitude: '=?',
			longitude: '=?'
        },
		link: function(scope, element, attrs, model) {
			$log.debug('Google Maps Autocomplete');
			var options = {
				types: ['geocode']
			};
			scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

			google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                fetchLatLongData();
			});

			function fetchLatLongData() {
				// Fetch Place Location data from Google
				var place = scope.gPlace.getPlace();

				// Split Lat/Long data into array
				var latLongList = place.geometry.location.toString().split(/, /);

				// Parse the array strings with regex for proper number format
				latLongList = _.map(latLongList, function( /* @type String*/ coord) {
					return coord.replace(/\(?(-?\d+\.\d+)\)?/, '$1');
				});

				// Set Lat/Long in form
				scope.$apply(function() {
					scope.latitude = parseFloat(latLongList[0]);
					scope.longitude = parseFloat(latLongList[1]);
                    model.$setViewValue(element.val());
                });
			}
		}

	};
};

},{}],8:[function(require,module,exports){
'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {
			ngModel: '=',
			placeholder: '@?'
		},
		compile: function(element, attrs) {
			// Create HTML Element (replacement to template)
			function createHTMLElement() {
				var html = '<input name="tags" id="' + attrs.id + '"/>';
				var newElem = $(html);
				element.replaceWith(newElem);
			}

			createHTMLElement();

			return function($scope, $element) { // Link Function
				function initialize() {
					// Initialize Tags
					$scope.tags = [];
					// Initialize Placeholder
					$scope.placeholder = !!$scope.placeholder ? $scope.placeholder : 'Add';

					// Check if ngModel is empty or not
					function checkModel() {
						if ($scope.ngModel) {
							if ($scope.ngModel.length > 0) {
								// $scope.$apply(function() {
									// Set Tags to ngModel
								// });
								$scope.tags = $scope.ngModel;
							}
						}
					}

					// Tag Input Options
					function createTagInput() {
						// jQuery Tags Input Options: https://github.com/xoxco/jQuery-Tags-Input
						$scope.options = {
							'height': 'auto',
							'width': 'auto',
							'defaultText': $scope.placeholder,
							'onAddTag': onAddTag,
							'onRemoveTag': onRemoveTag
						};

						// Create Tag Input
						$($element).tagsInput($scope.options);
					}


					// Import Tags if tags exist
					function importTags() {
						if ($scope.tags.length > 0) {
							var string = _.chain($scope.tags)
								.map(function(tag) {
									return tag.name;
								})
								.join(',')
								.value();

							$($element).importTags(string);
						}
					}

					// Set Tag input event handlers
					function setTagInputEvents() {
						$('#categories-tag_tag')
							.focus(function() {
								$('#categories-tag_tagsinput').addClass('input-focused');
							})
							.blur(function() {
								$('#categories-tag_tagsinput').removeClass('input-focused');
							});
					}

					// Initialize Functions
					checkModel();
					createTagInput();
					importTags();
					setTagInputEvents();
				}

				function onAddTag() {
					$scope.$apply(function() {
						$scope.tags.push({
							name: _.last($($element).val().split(','))
						});

						// modelAccessor.assign(scope, $scope.tags);
						// $log.debug(modelAccessor);
						$scope.ngModel = $scope.tags;
						$log.debug($scope.ngModel);
					});
				}

				function onRemoveTag(name) {
					$scope.$apply(function() {
						// TODO
						// $log.debug('Remove:');
						// $log.debug(name);
						$scope.tags = _.reject($scope.tags, function(tag) {
							return tag.name === name;
						});
						$scope.ngModel = $scope.tags;
					});
				}

				initialize();

			}; // End of Return
		},
	};
};

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope, $state, $timeout, FormService) {
	$log.debug('ConceptNewController');
	/* 	==============================
			Main Page
		============================== */

	// _______________
	// Scope Variables

	$scope.form = new FormService();

	// Menu Items
	$scope.sideMenu = [{
		displayName: 'Attributes',
		partial: 'concept.new.attrs',
	}, {
		displayName: 'Forms'
	}, {
		displayName: 'Related Concepts',
		partial: 'concept.new.relatedConcepts',
	}];

	// Sub Menu Items
	$scope.sideSubMenu = [{
		displayName: 'Add/Edit Forms',
		partial: 'concept.new.forms',
	}, {
		displayName: 'Concept to Form Links',
		partial: 'concept.new.links',
	}];

	// _______________
	// Scope Functions

	// Switch form partials
	$scope.switchForm = function(state) {
		$log.debug('Form is Switched: %s', state);
		$state.go(state);
	};

	$scope.editDropdown = function() {
		$('.submenu').slideToggle('fast'); // apply the toggle to the ul
		$('.submenu').parent().toggleClass('is-expanded');
	};

	/* 	==============================
			Attributes Partial
		============================== */

	// Supported Entities
	$scope.supportedEntities = [{
		name: 'Person'
	}, {
		name: 'Place'
	}, {
		name: 'Organization'
	}, {
		name: 'Event'
	}];

	// Block Types
	$scope.blockedTypes = [{
		name: 'Yes'
	}, {
		name: 'No'
	}];

	// Set Default Entities and Block Type
	$scope.form.attributes.entity = $scope.supportedEntities[0];
	$scope.form.attributes.blocked = $scope.blockedTypes[1];

	/* 	==============================
			Forms (Add/Edit) Partial
		============================== */


	/* 	==============================
			Forms (Links) Partial
		============================== */

	$scope.$watch('form.forms', function() {
		$scope.form.forms.forEach(function(form, index){
			$scope.form.links[index].displayName = $scope.form.forms[index].name;
		});
	});

	/* 	==============================
			Related Concepts Partial
		============================== */

	// _______________
	// Scope Functions

	$scope.submitNewConcept = function() {
		$log.debug('Scope form data');
		$log.debug($scope.form);
		// Include Validations here
	};


	$scope.$watch('form.attributes.conceptName', function() { // On Concept Name Change
		if ($scope.form.attributes.conceptName) {
			$scope.form.forms[0].name = $scope.form.attributes.conceptName; // Set Default Form Name
			$state.go('concept.new.attrs'); // Go to concept.new.attrs state
		}
	});
};

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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
