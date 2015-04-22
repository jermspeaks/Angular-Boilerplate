(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./routes":3,"./src/common/MainController":4,"./src/concept/ConceptNewController":5,"templates":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("concept/concept.delete.html","<p>Delete a concept</p>\n");
$templateCache.put("concept/concept.edit.html","<p>Edit a concept</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.html","<div>\n</div>\n\n<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <form name=\"loginForm\" ng-submit=\"login(loginForm.$valid)\" novalidate>\n        <fieldset class=\"stacked login\">\n\n            <div class=\"field\">\n                <label for=\"email\">Email</label>\n                <input\n                    name=\"email\"\n                    type=\"email\"\n                    id=\"email\"\n                    placeholder=\"me@corp.com\"\n                    ng-model=\"email\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <div ng-messages=\"loginForm.email.$error\" ng-if=\"loginForm.email.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">Your email is required.</small>\n                    <small ng-message=\"email\" class=\"error\">Email is not valid.</small>\n                </div>\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"password\">Password</label>\n                <input\n                    name=\"password\"\n                    type=\"password\"\n                    id=\"password\"\n                    ng-model=\"password\"\n                    required\n                />\n                <div ng-messages=\"loginForm.password.$error\" ng-if=\"loginForm.password.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">Your password is required.</small>\n                </div>\n            </div> <!-- /.field -->\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-login\"\n                                type=\"submit\"\n                                value=\"Log in\"\n                                ng-disabled=\"loginForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                        <div class=\"large-5 medium-7 columns\">\n                            <a href=\"http://helloreverb.com\" id=\"learn-more\" class=\"button secondary\">Learn More</a>\n                        </div>\n                        <div id=\"forgot-password\" class=\"large-4 columns\">\n                            <label for=\"forgot-password\" class=\"left inline\">\n                                <a href=\"/forgot_password\">Forgot password?</a>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset> <!-- /.login -->\n    </form>\n</section>\n");
$templateCache.put("concept/concept.update.html","<p>Update a concept</p>\n");}]);
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
                    controller: 'MainController'
                },
                new: {
                    url: 'concept/new',
                    templateUrl: 'concept/concept.new.html',
                    controller: 'ConceptNewController'
                },
                read: {
                    url: 'concept/find',
                    templateUrl: 'concept/concept.edit.html',
                    // controller: 'MainController'
                },
                update: {
                    url: 'concept/edit',
                    templateUrl: 'concept/concept.update.html',
                    // controller: 'MainController'
                },
                delete: {
                    url: 'concept/delete',
                    templateUrl: 'concept/concept.delete.html',
                    // controller: 'MainController'
                }
            }
        };

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('concept', pages.concept.main)
            .state('concept.new', pages.concept.new)
            .state('concept.find', pages.concept.read)
            .state('concept.edit', pages.concept.update)
            .state('concept.delete', pages.concept.delete)
        ;

    }];

},{}],4:[function(require,module,exports){
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
        }, {
            name: 'update',
            displayName: 'Edit a Concept',
            link: 'concept.edit'
        }, {
            name: 'delete',
            displayName: 'Delete a Concept',
            link: 'concept.delete'
        }]
    };

};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    

};

},{}]},{},[1]);
