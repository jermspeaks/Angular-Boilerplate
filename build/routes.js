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
