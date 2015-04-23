'use strict';

module.exports = function($log, $scope, $state) {
    // _______________
    // Scope Variables
    $scope.model = {};

    $scope.model.searchList = [{
        name: 'One',
        id: 1
    }, {
        name: 'Two',
        id: 2
    }, {
        name: 'Three',
        id: 3
    }];

    // Return search
    $scope.search = function() {
        $log.debug('Search: ');
        $log.debug($scope.searchQuery);

        // Send Search to back and wait for response
        // fetchSearchResults();

        // Loading Bar
        // Defer until search goes through
        $state.go('concept.find.list');
    };

    // function fetchSearchResults() {
    //     // function findSearchQuery() {
    //     //     return [{
    //     //         name: 'One'
    //     //     }, {
    //     //         name: 'Two'
    //     //     }, {
    //     //         name: 'Three'
    //     //     }];
    //     // }
    //
    //     // var response = findSearchQuery();
    //     $scope.model.searchList = [{
    //         name: 'One'
    //     }, {
    //         name: 'Two'
    //     }, {
    //         name: 'Three'
    //     }];
    // }

};
