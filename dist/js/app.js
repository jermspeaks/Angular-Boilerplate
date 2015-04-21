(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('topicGraphEditor', ['ui.router'])
    // Configuration
    .config(require('./routes'))

    // Controllers
    .controller('MainController', require('./src/common/MainController'))
    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))

;

require('templates');

},{"./routes":3,"./src/common/MainController":4,"templates":2}],2:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("main.html","<header id=\"main-header\">\n    <span>Topic Graph Editor</span>\n</header>\n\n<section id=\"main-menu\">\n    <ul>\n        <li ng-repeat=\"edit in model.editors\">\n            {{edit.displayName}}\n        </li>\n    </ul>\n</section>\n");}]);
; browserify_shim__define__module__export__(typeof templates != "undefined" ? templates : window.templates);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
'use strict';

module.exports =
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);

        var pages = {
            home: {
                url: '/',
                templateUrl: 'main.html',
                controller: 'MainController'
            }
        };

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('main', pages.home)

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
            displayName: 'Create a Concept'
        }, {
            name: 'read',
            displayName: 'Search for a Concept'
        }, {
            name: 'update',
            displayName: 'Edit a Concept'
        }, {
            name: 'delete',
            displayName: 'Delete a Concept'
        }]
    };

};

},{}]},{},[1]);
