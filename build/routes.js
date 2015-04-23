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
                search: {
                    url: 'concept/find',
                    templateUrl: 'concept/concept.search.html',
                    controller: 'ConceptSearchController'
                },
                list: {
                    templateUrl: 'concept/concept.search.list.html',
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

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('concept', pages.concept.main)
            .state('concept.new', pages.concept.new)
            .state('concept.find', pages.concept.search)
            .state('concept.find.list', pages.concept.list)
            .state('concept.edit', pages.concept.update)
            .state('concept.delete', pages.concept.delete)
        ;

    }];
