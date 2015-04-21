'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    $scope.model = {
        editors: [{
            name: 'create',
            displayName: 'Create a Concept'
        }, {
            name: 'read',
            displayName: 'Search for a Concept'
        }, {
            name: 'update',
            displayName: 'Edit a Concept'
        }, {
            name: 'delete',
            displayName: 'Delete a Concept'
        }]
    };

};
