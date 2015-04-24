'use strict';

module.exports = function($log, $scope, $state, $location, $stateParams, RootScopeService) {
    $log.log('ConceptSearchController');
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
            }, {
                name: 'Two',
                id: '2'
            }, {
                name: 'Three',
                id: '3'
            }];
        }

        var response = findSearchQuery();
        $scope.model.searchList = response;
    }

    fetchSearchResults();



};
