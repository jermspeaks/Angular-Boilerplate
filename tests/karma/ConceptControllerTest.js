describe('ConceptOverviewController', function() {
  var $scope, ctrl;

  beforeEach(function (){
    module('topicGraphEditor');

    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();

      ctrl = $controller('ConceptOverviewController', {
        $scope: $scope
      });
    });
  });

  it('should give 2 different editor settings', function() {
    expect($scope.model.editors.length).toEqual(2);
    expect($scope.model.editors[0].name).toEqual('create');
    expect($scope.model.editors[0].link).toEqual('concept.new');
  });

});
