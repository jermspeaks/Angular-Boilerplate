describe('ConceptSearchResultsController', function() {
  var $scope, ctrl;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function(_$rootScope_, _$controller_, _$state_) {
      $scope = _$rootScope_.$new();

      ctrl = _$controller_('ConceptSearchResultsController', {
        $scope: $scope
      });

      state = _$state_;
    });
  });

  xit('should mock the search list results', function() {
    // TODO Create a mock url query parameter
    $scope.search('Question');
    expect($scope.model.searchList).toBeDefined();
    expect($scope.model.searchList.length).toEqual(3);
    expect($scope.model.searchList[0].name).toEqual('One');
    expect($scope.model.searchList[1].id).toEqual('2');
  });

  xit('should route to a view page', function() {
    $scope.viewConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.view');
    expect(state.params.id).toBe('1');
  });

  xit('should route to an edit page', function() {
    $scope.editConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.edit');
    expect(state.params.id).toBe('1');
  });

  xit('should route to a delete page', function() {
    $scope.deleteConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.delete');
    expect(state.params.id).toBe('1');
  });

});
