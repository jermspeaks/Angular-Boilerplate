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
