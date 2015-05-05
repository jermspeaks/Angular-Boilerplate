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
			// Create HTML Element (replacement to template)
			function createHTMLElement() {
				var html = '<input name="tags" id="' + attrs.id + '"/>';
				var newElem = $(html);
				element.replaceWith(newElem);
			}

			createHTMLElement();

			return function($scope, $element) { // Link Function
				function initialize() {
					// Initialize Tags
					$scope.tags = [];
					// Initialize Placeholder
					$scope.placeholder = !!$scope.placeholder ? $scope.placeholder : 'Add';

					// Check if ngModel is empty or not
					function checkModel() {
						if ($scope.ngModel) {
							if ($scope.ngModel.length > 0) {
								// $scope.$apply(function() {
									// Set Tags to ngModel
								// });
								$scope.tags = $scope.ngModel;
							}
						}
					}

					// Tag Input Options
					function createTagInput() {
						// jQuery Tags Input Options: https://github.com/xoxco/jQuery-Tags-Input
						$scope.options = {
							'height': 'auto',
							'width': 'auto',
							'defaultText': $scope.placeholder,
							'onAddTag': onAddTag,
							'onRemoveTag': onRemoveTag
						};

						// Create Tag Input
						$($element).tagsInput($scope.options);
					}


					// Import Tags if tags exist
					function importTags() {
						if ($scope.tags.length > 0) {
							var string = _.chain($scope.tags)
								.map(function(tag) {
									return tag.name;
								})
								.join(',')
								.value();

							$($element).importTags(string);
						}
					}

					// Set Tag input event handlers
					function setTagInputEvents() {
						$('#categories-tag_tag')
							.focus(function() {
								$('#categories-tag_tagsinput').addClass('input-focused');
							})
							.blur(function() {
								$('#categories-tag_tagsinput').removeClass('input-focused');
							});
					}

					// Initialize Functions
					checkModel();
					createTagInput();
					importTags();
					setTagInputEvents();
				}

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
