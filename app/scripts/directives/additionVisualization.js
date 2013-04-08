'use strict';

angular.module('yeomanAngularApp')
  .directive('additionVisualization', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the additionVisualization directive');
      }
    };
  });
