'use strict';

module.exports = function($log, $scope) {
    $log.log('ConceptViewController');
    // _______________
    // Scope Variables
    $scope.model = {};

    $scope.backToSearch = function() {
      $log.log('Going back to search');
    };

};
