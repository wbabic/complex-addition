'use strict';

angular.module('yeomanAngularApp')
  .controller('AdditionCtrl', function ($scope) {
    // initialize the model
    $scope.z1 = "-1 + i";
    $scope.z2 = "2 - i";


    $scope.calculatePolar = function(){
      var z1 = math.complex($scope.z1);
      var z2 = math.complex($scope.z2);
      var z3 = math.add(z1, z2);
      var i = 0;
      $scope.data = [z1, z2, z3].map(function(p){
        i++;
        return {name: "z" + i,
                val: p};
      });
      console.log(math.format(z3));
      console.log("arg: " + math.format(math.arg(z3)));
    };

  });
