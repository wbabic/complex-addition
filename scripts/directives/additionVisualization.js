'use strict';

 angular.module('yeomanAngularApp')
  .directive('additionVisualization', function () {
    var w = 400;
    var h = 400;

    var xRange = 2;
    var yRange = 2;

    var padding = 20;

    var xScale = d3.scale.linear()
      .domain([-xRange, xRange])
      .range([padding, w-padding]);

    var yScale = d3.scale.linear()
      .domain([-yRange, yRange])
      .range([h-padding, padding]);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottum")
      .ticks(4);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(4);

    function drawAxis(svg, h, w) {
      svg.append("g")
        .attr("class", "axis")  //Assign "axis" class
        .attr("transform", "translate(0," + h/2 + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + w/2 + ",0)")
        .call(yAxis);
    }

    function drawUnitCircle(svg) {
      svg.append("g")
        .attr("class", "unit")
        .append('circle')
        .attr("cx", xScale(0))
        .attr("cy", yScale(0))
        .attr("r", xScale(1) - xScale(0));
    }

    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        val: '='
      },
      link: function postLink(scope, element, attrs) {
        element.text("z3 = z1 + z2");

        var svg = d3.select(element[0])
          .append("svg")
          .attr("width", w)
          .attr("height", h);

        drawAxis(svg, h, w);
        drawUnitCircle(svg);

        scope.$watch('val', function(newval, oldval){
          if (!newval){
            return;
          }
          console.log("newval: " + newval);

          svg.selectAll('g.point').remove();

          var points = svg.selectAll("g.point")
            .data(newval, function(d) { return d.name });

          points
            .enter()
            .append("g")
            .attr("class", "point");

          points
            .append('circle')
            .attr("cx", function(d){
              return xScale(d.val.re);
            })
            .attr("cy", function(d){
              return yScale(d.val.im);
            })
            .attr("r", 2)
            .attr("class", function(d,i){
              return "z" + i;
            });

          points
            .append('line')
            .attr('x1', xScale(0))
            .attr('y1', yScale(0))
            .attr('x2', function(d) { return xScale(d.val.re); })
            .attr('y2', function(d) { return yScale(d.val.im); })
            .attr('class', function(d,i) { return "z" + i; });

          points.exit().remove();
          
        });
      }
    };
  });
