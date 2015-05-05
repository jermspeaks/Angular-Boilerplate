'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {
			ngModel: '=',
			placeholder: '@?'
		},
		compile: function(element, attrs) {
			var html = '<input name="tags" id="' + attrs.id + '"/>';

			var newElem = $(html);
			element.replaceWith(newElem);

			return function($scope, $element) { // Link Function
				function initialize() {
					$scope.tags = [];

					// Check if ngModel is empty or not
					if ($scope.ngModel) {
						if ($scope.ngModel.length > 0) {
							// $scope.$apply(function() {
								// Set Tags to ngModel
							// });
							$scope.tags = $scope.ngModel;
						}
					}

					// Initialize Placeholder
					$scope.placeholder = !!$scope.placeholder ? $scope.placeholder : 'Add';

					// Tag Input Options
					$scope.options = {
						'height': 'auto',
						'width': 'auto',
						'defaultText': $scope.placeholder,
						'onAddTag': onAddTag,
						'onRemoveTag': onRemoveTag
					};

					// Create Tag Input
					$($element).tagsInput($scope.options);

					// Import Tags
					if ($scope.tags.length > 0) {
						var string = _.chain($scope.tags)
							.map(function(tag) {
								return tag.name;
							})
							.join(',')
							.value();

						$log.debug('Value of the string');
						$log.debug(string);
						$($element).importTags(string);

					}

					// Set Tag input event handlers
					$('#categories-tag_tag')
						.focus(function() {
							$('#categories-tag_tagsinput').addClass('input-focused');
						})
						.blur(function() {
							$('#categories-tag_tagsinput').removeClass('input-focused');
						});

					//

				}

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
					$scope.$apply(function() {
						$scope.tags.push({
							name: _.last($($element).val().split(','))
						});

						// modelAccessor.assign(scope, $scope.tags);
						// $log.debug(modelAccessor);
						$scope.ngModel = $scope.tags;
						$log.debug($scope.ngModel);
					});
				}

				function onRemoveTag(name) {
					$scope.$apply(function() {
						// TODO
						// $log.debug('Remove:');
						// $log.debug(name);
						$scope.tags = _.reject($scope.tags, function(tag) {
							return tag.name === name;
						});
						$scope.ngModel = $scope.tags;
					});
				}

				initialize();

			}; // End of Return
		},
	};
};
