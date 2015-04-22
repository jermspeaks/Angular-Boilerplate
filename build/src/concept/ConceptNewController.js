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

    $scope.submitNewConcept = function() {
        $log.debug('Scope form data');
        $log.debug($scope.form);
    };

};
