'use strict';

var f = d3.format(".2s");

function mod(z) {
  return Math.sqrt(z[0]*z[0]+z[1]*z[1]);
}

function arg(z) {
  return Math.atan(z[1]/z[0]);
}

function fromPolar(r,theta){
  var x = r * Math.cos(theta);
  var y = r * Math.sin(theta);
  return [x,y];
}

function unit(theta){
  return fromPolar(1,theta);
}

function radiansToDegrees(radians){
  return 180 * (radians/Math.PI);
}

function degreesToRadians(degrees){
  return Math.PI * (degrees/180);
}

function inverse(z) {
  return fromPolar(1/mod(z), -arg(z));
}

function plus(p, q){
  return [p[0]+q[0],p[1]+q[1]];
}

function times(s, p){
  return [s*p[0],s*p[1]];
}

function logPoint(z){
  console.log("[" + f(z[0]) + "," + f(z[1]) + "]");
}

angular.module('yeomanAngularApp')
  .controller('AdditionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.calculatePolar = function(){
      var p = [parseFloat($scope.x1), parseFloat($scope.y1)];
      console.log(p)
      $scope.r1 = mod(p);
      $scope.a1 = arg(p);
    };

    $scope.calculateRectangular = function(){
      var r = parseFloat($scope.r1);
      var ad = parseFloat($scope.a1);
      var ar = degreesToRadians(ad);
      console.log("r = " + r);
      console.log("degrees = " + ad);
      console.log("radians = " + ar);
      var polar = [r, ad];
      var rect = fromPolar(polar);
      logPoint(rect);
      $scope.x1 = rect[0];
      $scope.y1 = rect[1];
    };
  });
