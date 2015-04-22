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
