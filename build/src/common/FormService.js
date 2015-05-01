'use strict';

module.exports = function($log) {
    // IDEA: Might be able to utilize local session caching to save data in case user refreshes page

    // Cache for Form Fields
    var Form = function(attrs, forms, links, relatedConcepts) {
        // Attributes Object
        this.attributes = attrs || {
            conceptName: ''
        };

        this.forms = forms || [{
            tag: 'default',
            id: 'Form 1',
            name: ''
        }];

        this.links = links || [];

        this.relatedConcepts = relatedConcepts || [{
            id: 'Concept 1'
        }];
    };

    // Forms

    Form.prototype.addForm = function() {
        $log.debug('Adding Form Field');

		var newItemNo = this.forms.length + 1;

		this.forms.push({
			'id': 'Form ' + newItemNo
		});
        // TODO Update Link
    };

    Form.prototype.deleteForm = function(associatedForm) {
        $log.debug('Deleting Form Field');

		this.forms = _.reject(this.forms, function(aForm) {
			return aForm.$$hashKey === associatedForm.$$hashKey;
		});

        // TODO Update Link
    };

    // Links

    // Related Concepts
    Form.prototype.addConcept = function() {
        $log.debug('Adding Concept Field');

		var newItemNo = this.relatedConcepts.length + 1;

        this.relatedConcepts.push({
            'id': 'Form ' + newItemNo
        });
    };

    Form.prototype.deleteConcept = function(relatedConcept) {
        $log.debug('Deleting Concept Field');

		this.relatedConcepts = _.reject(this.relatedConcepts, function(rConcept) {
			return rConcept.$$hashKey === relatedConcept.$$hashKey;
		});
    };

    // ___________________________________
    // Exposed RootScopeServices Functions

    return Form;
};
