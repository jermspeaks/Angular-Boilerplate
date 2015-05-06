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

	$scope.$watch('form.forms', function() {
		$scope.form.forms.forEach(function(form, index){
			$scope.form.links[index].displayName = $scope.form.forms[index].name;
		});
	});

	/* 	==============================
			Related Concepts Partial
		============================== */

	// _______________
	// Scope Functions

	$scope.submitNewConcept = function() {
		$log.debug('Scope form data');
		$log.debug($scope.form);
		// Include Validations here
	};


	$scope.$watch('form.attributes.conceptName', function() { // On Concept Name Change
		if ($scope.form.attributes.conceptName) {
			$scope.form.forms[0].name = $scope.form.attributes.conceptName; // Set Default Form Name
			$state.go('concept.new.attrs'); // Go to concept.new.attrs state
		}
	});
};
