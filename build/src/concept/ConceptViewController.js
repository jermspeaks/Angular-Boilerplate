'use strict';

module.exports = function($log, $scope, $state, RootScopeService) {
    $log.log('ConceptViewController');
    // _______________
    // Scope Variables
    $scope.concept = {};

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

    function loadConceptView() {
        $scope.concept.id = $state.params.id;

        function fetchConceptDetails() {
            var forms = [];
            var relatedConcepts = [];

            for (var i = 0; i < 5; i++) {
                forms.push({
                    name: chance.word()
                });

                relatedConcepts.push({
                    name: chance.word() + ' ' + chance.word()
                });
            }

            return {
                name: chance.word(),
                displayName: chance.word(),
                forms: forms,
                relatedConcepts: relatedConcepts
            };
        }

        var response = fetchConceptDetails();
        $scope.concept.name = response.name;
        $scope.concept.displayName = response.displayName;
        $scope.concept.forms = response.forms;
        $scope.concept.relatedConcepts = response.relatedConcepts;
    }

    loadConceptView();
    $log.debug($scope.concept);
};
