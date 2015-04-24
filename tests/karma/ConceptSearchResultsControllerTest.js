describe('ConceptSearchResultsController', function() {
  var $scope, ctrl;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function(_$rootScope_, _$controller_, _$state_, _$stateParams_) {
      $scope = _$rootScope_.$new();

      state = _$state_;
      stateParams = _$stateParams_;
      stateParams.q = "Random Search";

      ctrl = _$controller_('ConceptSearchResultsController', {
        $scope: $scope
      });

    });
  });

  it('should mock the search list results', function() {
    // $scope.search('Question');
    expect($scope.model.searchList).toBeDefined();
    expect($scope.model.searchList.length).toEqual(3);
    expect($scope.model.searchList[0].name).toEqual('One');
    expect($scope.model.searchList[1].id).toEqual('2');
  });

  it('should route to a view page', function() {
    $scope.viewConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.view');
    expect(state.params.id).toBe('1');
  });

  it('should route to an edit page', function() {
    $scope.editConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.edit');
    expect(state.params.id).toBe('1');
  });

  it('should route to a delete page', function() {
    $scope.deleteConcept('1');
    $scope.$digest();
    expect(state.current.name).toBe('concept.delete');
    expect(state.params.id).toBe('1');
  });

});
