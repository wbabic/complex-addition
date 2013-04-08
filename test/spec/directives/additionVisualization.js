'use strict';

describe('Directive: additionVisualization', function () {
  beforeEach(module('yeomanAngularApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<addition-visualization></addition-visualization>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the additionVisualization directive');
  }));
});
