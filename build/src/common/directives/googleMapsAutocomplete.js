'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
            ngModel: '=',
			latitude: '=?',
			longitude: '=?'
        },
		link: function(scope, element, attrs, model) {
			var options = {
				types: ['geocode']
			};
			scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

			google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                fetchLatLongData();
			});

			function fetchLatLongData() {
				// Fetch Place Location data from Google
				var place = scope.gPlace.getPlace();

				// Split Lat/Long data into array
				var latLongList = place.geometry.location.toString().split(/, /);

				// Parse the array strings with regex for proper number format
				latLongList = _.map(latLongList, function( /* @type String*/ coord) {
					return coord.replace(/\(?(-?\d+\.\d+)\)?/, '$1');
				});

				// Set Lat/Long in form
				scope.$apply(function() {
					scope.latitude = parseFloat(latLongList[0]);
					scope.longitude = parseFloat(latLongList[1]);
                    model.$setViewValue(element.val());
                });
			}
		}

	};
};
