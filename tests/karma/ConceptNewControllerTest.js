describe('ConceptNewController', function() {
  var $scope, ctrl;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function(_$rootScope_, _$controller_, _$state_) {
      $scope = _$rootScope_.$new();

      ctrl = _$controller_('ConceptNewController', {
        $scope: $scope
      });

      state = _$state_;
    });
  });

  describe('$scope.form', function() {
    it('should create a new form object', function() {
      expect($scope.form).toBeDefined();
      expect($scope.form.attributes.conceptName).toBe('');
    });
  });

  describe('$scope.sideMenu', function() {
    it('should have side menu options', function() {
      expect($scope.sideMenu.length).toEqual(3);
      expect($scope.sideMenu[0].displayName).toEqual('Attributes');
    });
  });

  describe('$scope.sideSubMenu', function() {
    it('should have sub side menu options for "Forms"', function() {
      expect($scope.sideSubMenu.length).toEqual(2);
      expect($scope.sideSubMenu[0].partial).toEqual('concept.new.forms');
    });
  });

  describe('$scope.switchForm', function() {
    it('should change the state', function() {
      expect(state.$current.name).toEqual('');
      $scope.switchForm('concept.new.forms');
      $scope.$digest(); // Need to digest $state.go();
      expect(state.$current.name).toEqual('concept.new.forms');
    });
  });

  describe('$scope.supportedEntities', function() {
    it('should have supported entities for its entities dropdown', function() {
      expect($scope.supportedEntities.length).toEqual(4);
      expect($scope.supportedEntities[0].name).toEqual('Person');
    });

    it('should set a default supported entity', function() {
      expect($scope.form.attributes.entity.name).toEqual('Person');
    });
  });

  describe('$scope.blockedTypes', function() {
    it('should have supported entities for its entities dropdown', function() {
      expect($scope.blockedTypes.length).toEqual(2);
      expect($scope.blockedTypes[0].name).toEqual('Yes');
    });

    it('should set a default blocked type', function() {
      expect($scope.form.attributes.blocked.name).toEqual('No');
    });
  });
});
