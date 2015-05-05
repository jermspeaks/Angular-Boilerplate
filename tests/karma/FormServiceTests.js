describe('FormService', function() {
  var $scope, form;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function(_$rootScope_, $injector) {
      $scope = _$rootScope_.$new();

      FormService = $injector.get('FormService');
    });

    form = new FormService();
  });

  describe('attributes', function() {
    it('should have default attributes', function() {
      expect(form.attributes.conceptName).toEqual('');
    });
  });

  describe('forms', function() {
    it('should have a default form', function() {
      expect(form.forms.length).toEqual(1);
      expect(form.forms[0].tag).toEqual('default');
    });
  });

  describe('links', function() {
    it('should have a default link', function() {
      expect(form.links.length).toEqual(1);
      expect(form.links[0].tag).toEqual('default');
    });
  });

  describe('relatedConcepts', function() {
    it('should have a default relatedConcepts', function() {
      expect(form.relatedConcepts.length).toEqual(1);
    });
  });

  describe('addForm()', function() {
    it('should add a form', function() {
      form.addForm();
      expect(form.forms.length).toEqual(2);

      for (var i = 0; i < 3; i++) {
        form.addForm();
      }

      expect(form.forms.length).toEqual(5);
    });
  });

  describe('deleteForm()', function() {
    it('should delete a form', function() {
      // Add new Form with Hashkey
      form.addForm();
      form.forms[1].$$hashKey = 1;
      var newForm = form.forms[1];

      expect(form.forms.length).toEqual(2);
      expect(form.forms[1].$$hashKey).toEqual(1);

      // Delete that new form
      form.deleteForm(newForm);

      expect(form.forms.length).toEqual(1);
    });
  });

  describe('addConcept()', function() {
    it('should add a form', function() {
      form.addConcept();
      expect(form.relatedConcepts.length).toEqual(2);

      for (var i = 0; i < 3; i++) {
        form.addConcept();
      }

      expect(form.relatedConcepts.length).toEqual(5);
    });
  });

  describe('deleteConcept()', function() {
    it('should delete a form', function() {
      // Add new Form with Hashkey
      form.addConcept();
      form.relatedConcepts[1].$$hashKey = 1;
      var newConcept = form.relatedConcepts[1];

      expect(form.relatedConcepts.length).toEqual(2);
      expect(form.relatedConcepts[1].$$hashKey).toEqual(1);

      // Delete that new form
      form.deleteConcept(newConcept);

      expect(form.relatedConcepts.length).toEqual(1);
    });
  });

});
