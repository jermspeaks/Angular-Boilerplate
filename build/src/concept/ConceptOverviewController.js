'use strict';

module.exports = function($log, $scope) {
    // _______________
    // Scope Variables
    $scope.model = {
        editors: [{
            name: 'create',
            displayName: 'Create a Concept',
            link: 'concept.new'
        }, {
            name: 'read',
            displayName: 'Search for a Concept',
            link: 'concept.find'
        }]
        // {
        //     name: 'update',
        //     displayName: 'Edit a Concept',
        //     link: 'concept.edit'
        // }, {
        //     name: 'delete',
        //     displayName: 'Delete a Concept',
        //     link: 'concept.delete'
        // }]
    };

};
