'use strict';

module.exports = function($log, $scope, $state, RootScopeService) {
    $log.log('ConceptEditController');
    // _______________
    // Scope Variables
    $scope.form = {
        associatedForms: [{
            id: 'Form 1'
        }],
        relatedConcepts: [{
            id: 'Concept 1'
        }]
    };

    $scope.supportedEntities = [{
        name: 'Person'
    }, {
        name: 'Thing'
    }, {
        name: 'Location'
    }];

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

    $scope.addConcept = function() {
        $log.debug('Adding Concept Field');

        var newItemNo = $scope.form.relatedConcepts.length + 1;

        $scope.form.relatedConcepts.push({'id':'Form ' + newItemNo});
    };

    $scope.deleteConcept = function(relatedConcept) {
        $log.debug('Deleting Concept Field');
        $scope.form.relatedConcepts = _.reject($scope.form.relatedConcepts, function(rConcept) {
            return rConcept.$$hashKey === relatedConcept.$$hashKey;
        });
    };

    $scope.addForm = function() {
        $log.debug('Adding Form Field');

        var newItemNo = $scope.form.associatedForms.length + 1;

        $scope.form.associatedForms.push({'id':'Form ' + newItemNo});
    };

    $scope.deleteForm = function(associatedForm) {
        $log.debug('Deleting Form Field');
        $scope.form.associatedForms = _.reject($scope.form.associatedForms, function(aForm) {
            return aForm.$$hashKey === associatedForm.$$hashKey;
        });
    };

    $scope.submitEditedConcept = function() {
        $log.debug('Scope form data');
        $log.debug($scope.form);
    };

};
