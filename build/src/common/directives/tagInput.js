'use strict';

// Multi series bar chart
module.exports = function($log, $parse) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {},
		compile: function(element, attrs) {
			var modelAccessor = $parse(attrs.ngModel);
			var html = '<input name="tags" id="' + attrs.id + '" value="" />';

			var newElem = $(html);
			element.replaceWith(newElem);

			return function ($scope, $element, $attrs, controller) { // Link Function

				/*
					jQuery Tags Input Options
					{
					   'autocomplete_url': url_to_autocomplete_api,
					   'autocomplete': { option: value, option: value},
					   'height':'100px',
					   'width':'300px',
					   'interactive':true,
					   'defaultText':'add a tag',
					   'onAddTag':callback_function,
					   'onRemoveTag':callback_function,
					   'onChange' : callback_function,
					   'delimiter': [',',';'],
					   'removeWithBackspace' : true,
					   'minChars' : 0,
					   'maxChars' : 0, //if not provided there is no limit
					   'placeholderColor' : '#666666'
					}
				*/

				function onAddTag() {
					$scope.$apply(function (scope) {
						var tag = [];
						modelAccessor.assign(scope, tag)
					});
				}

				function onRemoveTag() {
					$scope.$apply(function (scope) {
						var tag = [];
						modelAccessor.assign(scope, tag)
					});
				}

				$scope.options = {
				   'height':'auto',
				   'width':'auto',
				   'defaultText':'Add a category',
				   'onAddTag': onAddTag,
				   'onRemoveTag':onRemoveTag
				};

				$log.debug($element);
	            $($element).tagsInput($scope.options);

	            // scope.$watch(modelAccessor, function (val) {
	            //    var date = new Date(val);
	            //    element.tagsInput("setDate", date);
	            // });

	         };
		},
		// templateUrl: 'common/directive-tag-input',
		// controller: function($scope) {
		// 	$scope.model = {};
		// 	$log.debug('yes?');
		// }
	};
};
