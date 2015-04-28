'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		scope: {
			location: '@?'
		},
		replace: true,
		transclude: true,
		template: '<div id="map" style="position: relative"></div>',
		controller: function($scope, $element) {
			function initialize() {
				var mapOptions = {
					zoom: 4,
					center: new google.maps.LatLng(40.0000, -98.0000),
					mapTypeId: google.maps.MapTypeId.TERRAIN
				}

				$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

				// Create the autocomplete object, restricting the search
				// to geographical location types.
				$scope.autocomplete = new google.maps.places.Autocomplete(
					/** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
					{ types: ['geocode'] });

				google.maps.event.addListener($scope.autocomplete, 'place_changed', function() {
				    reloadMap();
				});
			}

			function reloadMap() {
				$scope.place = $scope.autocomplete.getPlace();
				$scope.location = $scope.place.geometry.location.toString();
				$log.debug($scope.place.geometry.location.toString());

				// var mapOptions = {
				// 	zoom: 8,
				//     center: place.geometry.location
				// 	mapTypeId: google.maps.MapTypeId.TERRAIN
				// }
				//
				// $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
			}

			initialize();
		}
	};
};
