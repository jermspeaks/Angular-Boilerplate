'use strict';

// Multi series bar chart
module.exports = function($log, $parse) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {
			placeholder: '@?'
		},
		compile: function(element, attrs) {
			var modelAccessor = $parse(attrs.ngModel);
			var html = '<input name="tags" id="' + attrs.id + '" value=""/>';

			var newElem = $(html);
			element.replaceWith(newElem);

			return function ($scope, $element) { // Link Function

				$scope.placeholder = !!$scope.placeholder ? $scope.placeholder : 'Add';

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
						modelAccessor.assign(scope, tag);
					});
				}

				function onRemoveTag() {
					$scope.$apply(function (scope) {
						var tag = [];
						modelAccessor.assign(scope, tag);
					});
				}

				$scope.options = {
				   'height':'auto',
				   'width':'auto',
				   'defaultText': $scope.placeholder,
				   'onAddTag': onAddTag,
				   'onRemoveTag':onRemoveTag
				};

	            $($element).tagsInput($scope.options);

				$('#categories-tag_tag')
					.focus(function() {
						$('#categories-tag_tagsinput').addClass('input-focused');
					})
					.blur(function() {
						$('#categories-tag_tagsinput').removeClass('input-focused');
					})



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
