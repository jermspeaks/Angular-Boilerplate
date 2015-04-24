'use strict';

module.exports = function($log, $scope, $state, RootScopeService) {
    $log.log('ConceptViewController');
    // _______________
    // Scope Variables
    $scope.model = {};

    $scope.backToSearch = function() {
        $log.debug('Back To Concept Search Results');
        var search = RootScopeService.getSearch();

        if (search) {
            $state.transitionTo('concept.find.list', {q: search}); // TODO Can't figure out why the url won't change
            // $state.go('concept.find.list', {q: search});
        } else {
            $state.go('concept.find');
        }
    };

};
