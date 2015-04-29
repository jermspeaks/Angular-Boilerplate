'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {},
		templateUrl: 'common/directive-tag-input',
		controller: function($scope) {
			$scope.model = {};
			$log.debug('yes?');
		}
	};
};
