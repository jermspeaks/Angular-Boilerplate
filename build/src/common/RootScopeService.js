'use strict';

module.exports = function($log, $rootScope) {
    // List of things kept in root scope which constitute the application context
    //
    // search: Saves the search object for concept search

    // _____________________________________
    // Configuration Settings for $rootScope

    // ___________________________________
    // Exposed RootScopeServices Functions

    return {
        saveSearch: function(searchObj) {
            $rootScope.search = searchObj;
        },
        getSearch: function() {
            return $rootScope.search;
        },
        resetSearch: function() {
            $rootScope.search = undefined;
        }
    };
};
