describe('MainController', function() {
  var $scope, ctrl;


  // This function will be called before every "it" block.
  // This should be used to "reset" state for your tests.
  beforeEach(function (){
    // load the module you're testing.
    module('topicGraphEditor');

    // INJECT! This part is critical
    // $rootScope - injected to create a new $scope instance.
    // $controller - injected to create an instance of our controller.
    // $q - injected so we can create promises for our mocks.
    // _$timeout_ - injected to we can flush unresolved promises.
    inject(function($rootScope, $controller) {
      // create a scope object for us to use.
      $scope = $rootScope.$new();

      // now run that scope through the controller function,
      // injecting any services or other injectables we need.
      // **NOTE**: this is the only time the controller function
      // will be run, so anything that occurs inside of that
      // will already be done before the first spec.
      ctrl = $controller('MainController', {
        $scope: $scope
      });
    });
  });

  it('should give 4 different editor settings', function() {
    expect($scope.model.editors.length).toEqual(4);
  });

});
