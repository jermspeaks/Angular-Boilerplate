'use strict';

module.exports = function($log, $scope, $state) {
    // _______________
    // Scope Variables
    $scope.model = {};

    // Return search
    $scope.search = function() {
        $log.debug('Search: ');
        $log.debug($scope.searchQuery);

        // Send Search to back and wait for response
        fetchSearchResults();

        // Loading Bar
        // Defer until search goes through
        $state.go('concept.find.list');
    };

    $scope.viewConcept = function(id) {
        $log.debug('View %s', id);
        $state.transitionTo('contact.view', { id: id });
    };

    $scope.editConcept = function(id) {
        $log.debug('Edit %s', id);
        $state.transitionTo('contact.edit', { id: id });
    };

    $scope.deleteConcept = function(id) {
        $log.debug('Delete %s', id);
        $state.transitionTo('contact.delete', { id: id });
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

};
