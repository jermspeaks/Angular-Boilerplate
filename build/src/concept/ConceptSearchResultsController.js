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
