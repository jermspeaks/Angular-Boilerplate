'use strict';

module.exports = function($log, $scope) {
	// _______________
	// Scope Variables
	$scope.form = {
		associatedForms: [{
			id: 'Form 1'
		}],
		relatedConcepts: [{
			id: 'Concept 1'
		}]
	};

	$scope.supportedEntities = [{
		name: 'Person'
	}, {
		name: 'Place'
	}, {
		name: 'Organization'
	}, {
		name: 'Event'
	}];

	$scope.blockedTypes = [{
		name: 'Yes'
	}, {
		name: 'No'
	}];

	$scope.form.entity = $scope.supportedEntities[0];
	$scope.form.blocked = $scope.blockedTypes[1];

	$scope.autocomplete = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */
		(document.getElementById('map-autocomplete')), {
			types: ['geocode']
		});

	google.maps.event.addListener($scope.autocomplete, 'place_changed', function() {
		fetchLatLongData();
	});

	// _______________
	// Scope Functions

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
        $scope.place = $scope.autocomplete.getPlace();
        $scope.form.geoLocation = $scope.place.geometry.location.toString();
    }

};
