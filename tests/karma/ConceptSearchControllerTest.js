describe('ConceptSearchController', function() {
  var $scope, ctrl;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function(_$rootScope_, _$controller_, _$state_) {
      $scope = _$rootScope_.$new();

      ctrl = _$controller_('ConceptSearchController', {
        $scope: $scope
      });

      state = _$state_;
    });
  });

  it('should mock the search list results', function() {
    $scope.search('Question');
    expect($scope.model.searchList).toBeDefined();
    expect($scope.model.searchList.length).toEqual(3);
    expect($scope.model.searchList[0].name).toEqual('One');
    expect($scope.model.searchList[1].id).toEqual('2');
  });

  it('should change the state with searching', function() {
    expect(state.current.name).toBe('');
    $scope.search('Question');
    $scope.$digest(); // Need to digest $state.go();
    expect(state.current.name).toBe('concept.find.list');
  });

});
