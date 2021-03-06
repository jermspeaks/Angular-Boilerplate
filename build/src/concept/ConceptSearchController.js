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
