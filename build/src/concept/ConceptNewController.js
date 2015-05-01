'use strict';

module.exports = function($log, $scope, $state, $timeout) {
	// _______________
	// Scope Variables
	$scope.sideMenu = [{
		displayName: 'Attributes',
		partial: 'concept.new.attrs',
	}, {
		displayName: 'Forms'
	}, {
		displayName: 'Related Concepts',
		partial: 'concept.new.relatedConcepts',
	}];

	$scope.sideSubMenu = [{
		displayName: 'Add/Edit Forms',
		partial: 'concept.new.forms',
	}, {
		displayName: 'Concept to Form Links',
		partial: 'concept.new.links',
	}];

	$scope.form = {
		associatedForms: [{
			id: 'Form 1'
		}],
		relatedConcepts: [{
			id: 'Concept 1'
		}]
	};
	// Default Form
	$scope.form.defaultForm = {};

	// _______________
	// Scope Functions

	$scope.switchForm = function(state) {
		$log.debug('Form is Switched: %s', state);
		$state.go(state);
		// if (state === 'concept.new.attrs') loadAttributesForm();
	};

	$scope.editDropdown = function() {
		$('.submenu').slideToggle('fast');  // apply the toggle to the ul
		$('.submenu').parent().toggleClass('is-expanded');
	};

	// TODO add weights to forms

	$scope.addConcept = function() {
		$log.debug('Adding Concept Field');

		var newItemNo = $scope.form.relatedConcepts.length + 1;

		$scope.form.relatedConcepts.push({
			'id': 'Form ' + newItemNo
		});
	};

	$scope.deleteConcept = function(relatedConcept) {
		$log.debug('Deleting Concept Field');
		$scope.form.relatedConcepts = _.reject($scope.form.relatedConcepts, function(rConcept) {
			return rConcept.$$hashKey === relatedConcept.$$hashKey;
		});
	};

	$scope.addForm = function() {
		$log.debug('Adding Form Field');

		var newItemNo = $scope.form.associatedForms.length + 1;

		$scope.form.associatedForms.push({
			'id': 'Form ' + newItemNo
		});
	};

	$scope.deleteForm = function(associatedForm) {
		$log.debug('Deleting Form Field');
		$scope.form.associatedForms = _.reject($scope.form.associatedForms, function(aForm) {
			return aForm.$$hashKey === associatedForm.$$hashKey;
		});
	};

	$scope.submitNewConcept = function() {
		$log.debug('Scope form data');
		$log.debug($scope.form);
	};

    function fetchLatLongData() {
		// Fetch Place Location data from Google
        $scope.place = $scope.autocomplete.getPlace();

		/*jshint camelcase: false */
		// Fetch address and update the form
		$scope.address = $scope.place.formatted_address ? $scope.place.formatted_address : $scope.place;
		/*jshint camelcase: true */

		// Split Lat/Long data into array
		var latLongList = $scope.place.geometry.location.toString().split(/, /);

		// Parse the array strings with regex for proper number format
		latLongList = _.map(latLongList, function(/* @type String*/ coord) {
			return coord.replace(/\(?(-?\d+\.\d+)\)?/, '$1');
		});

		// Set Lat/Long in form
		$scope.form.latitude = parseFloat(latLongList[0]);
		$scope.form.longitude = parseFloat(latLongList[1]);

		// Apply changes for the view to update the changes in $scope.form object
		$scope.$apply();
    }

	function loadAttributesForm() {
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
		$scope.form.entity = $scope.supportedEntities[0];
		$scope.form.blocked = $scope.blockedTypes[1];

		// Set Autocomplete feature from Google
		$scope.autocomplete = new google.maps.places.Autocomplete(
			/** @type {HTMLInputElement} */
			(document.getElementById('map-autocomplete')), {
				types: ['geocode']
			});

		// Add event listener after autocomplete set
		google.maps.event.addListener($scope.autocomplete, 'place_changed', function() {
			fetchLatLongData();
		});
	}

	$scope.$watch('form.conceptName', function() {
		if ($scope.form.conceptName) {
			$state.go('concept.new.attrs');
			$timeout(function() {
				loadAttributesForm();
			});
		}
	});

};
