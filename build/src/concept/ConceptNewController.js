'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    $scope.form = {};

    $scope.supportedEntities = [{
        name: 'Person'
    }, {
        name: 'Thing'
    }, {
        name: 'Location'
    }];

    // _______________
    // Scope Functions

    $scope.addConcept = function() {
      $log.debug('Adding Form Field');
    };

    $scope.deleteConcept = function() {

    };

    $scope.submitNewConcept = function() {
        $log.debug('Scope form data');
        $log.debug($scope.form);
    };

};
