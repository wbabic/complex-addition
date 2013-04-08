'use strict';

describe('Controller: AdditionCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAngularApp'));

  var AdditionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AdditionCtrl = $controller('AdditionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
