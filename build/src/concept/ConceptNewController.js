'use strict';

module.exports = function($log, $scope, $state, $timeout, FormService) {
	$log.debug('ConceptNewController');
	/* 	==============================
			Main Page
		============================== */

	// _______________
	// Scope Variables

	$scope.form = new FormService();

	// Menu Items
	$scope.sideMenu = [{
		displayName: 'Attributes',
		partial: 'concept.new.attrs',
	}, {
		displayName: 'Forms'
	}, {
		displayName: 'Related Concepts',
		partial: 'concept.new.relatedConcepts',
	}];

	// Sub Menu Items
	$scope.sideSubMenu = [{
		displayName: 'Add/Edit Forms',
		partial: 'concept.new.forms',
	}, {
		displayName: 'Concept to Form Links',
		partial: 'concept.new.links',
	}];

	// _______________
	// Scope Functions

	// Switch form partials
	$scope.switchForm = function(state) {
		$log.debug('Form is Switched: %s', state);
		$state.go(state);
		$log.debug($scope.form);
	};

	$scope.editDropdown = function() {
		$('.submenu').slideToggle('fast'); // apply the toggle to the ul
		$('.submenu').parent().toggleClass('is-expanded');
	};

	/* 	==============================
			Attributes Partial
		============================== */

	// Supported Entities
	$scope.supportedEntities = [{
		name: 'Person'
	}, {
		name: 'Place'
	}, {
		name: 'Organization'
	}, {
		name: 'Event'
	}];

	// Block Types
	$scope.blockedTypes = [{
		name: 'Yes'
	}, {
		name: 'No'
	}];

	// Set Default Entities and Block Type
	$scope.form.attributes.entity = $scope.supportedEntities[0];
	$scope.form.attributes.blocked = $scope.blockedTypes[1];

	/* 	==============================
			Forms (Add/Edit) Partial
		============================== */


	/* 	==============================
			Forms (Links) Partial
		============================== */

	/* 	==============================
			Related Concepts Partial
		============================== */

	// _______________
	// Scope Variables

	$scope.form.relatedConcepts = [{
		id: 'Concept 1'
	}];

	// _______________
	// Scope Functions

	$scope.submitNewConcept = function() {
		$log.debug('Scope form data');
		$log.debug($scope.form);
	};

	// function fetchLatLongData() {
	// 	// Fetch Place Location data from Google
	//
	// 	/*jshint camelcase: false */
	// 	// Fetch address and update the form
	// 	// $scope.form.attributes.address = $scope.place.formatted_address ? $scope.place.formatted_address : $scope.place;
	//
	// 	/*jshint camelcase: true */
	//
	// 	// Split Lat/Long data into array
	// 	var latLongList = $scope.place.geometry.location.toString().split(/, /);
	// 	$log.debug(latLongList);
	//
	// 	// Parse the array strings with regex for proper number format
	// 	latLongList = _.map(latLongList, function( /* @type String*/ coord) {
	// 		return coord.replace(/\(?(-?\d+\.\d+)\)?/, '$1');
	// 	});
	//
	// 	// Set Lat/Long in form
	// 	$scope.form.attributes.latitude = parseFloat(latLongList[0]);
	// 	$scope.form.attributes.longitude = parseFloat(latLongList[1]);
	//
	// 	// Apply changes for the view to update the changes in $scope.form object
	// 	$scope.$apply();
	// }

	// function createAutocomplete() {
	// 	// Set Autocomplete feature from Google
	// 	$scope.autocomplete = new google.maps.places.Autocomplete(
	// 		/** @type {HTMLInputElement} */
	// 		(document.getElementById('map-autocomplete')), {
	// 			types: ['geocode']
	// 		});
	// }
	//
	// function loadMappingInput() {
	// 	// Add event listener after autocomplete set
	// 	google.maps.event.addListener($scope.autocomplete, 'place_changed', function() {
	//
	// 		// fetchLatLongData();
	// 	});
	// }

	$scope.$watch('form.attributes.conceptName', function() { // On Concept Name Change
		if ($scope.form.attributes.conceptName) {
			$scope.form.forms[0].name = $scope.form.attributes.conceptName; // Set Default Form Name
			$state.go('concept.new.attrs'); // Go to concept.new.attrs state
			$timeout(function() {
				// createAutocomplete();
				// loadMappingInput(); // Reload autocomplete map element listener
			});
		}
	});

	$scope.$watch('place', function() {
		if($scope.place) {
			$log.debug('Fetch New Place')
			fetchLatLongData();
		}
	});

};
