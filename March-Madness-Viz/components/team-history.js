const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');


const size = 600;
var margin = { top: 20, right: 50, bottom: 30, left: 40 },
  width = 960 - margin.left - margin.right,
  height = 2000 - margin.top - margin.bottom;

var y = d3.scaleBand()
  .range([height, 0])
  .padding(0.1);

var x = d3.scaleBand()
  .range([0, width])
  .padding(0.1);

class TeamHistory extends D3Component {
  initialize(node, props) {
    var sweet16 = props.sweet.sort(function (x, y) {
      return d3.ascending(x.APP, y.APP);
    })
    const container = d3.select(node).append('svg');
    container.attr('viewBox', `-40 0 ${size * 2} ${size * 5}`)
      .style('width', '180%')
      .style('height', '110%');

    d3.select(node).attr("class", "visContainer")

    x.domain([0, d3.max(sweet16, function (d) { return d.APP; })])
    y.domain(sweet16.map(function (d) { return d.TEAMS; }));


    container.append("g")
      .attr('transform', 'translate(' + [150] + ')')
      .style("font-size", "15px")
      .call(d3.axisLeft(y));

    var div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .attr("x", 20)
      .style("opacity", 0);

    var bars = container.selectAll("rect")
      .data(sweet16)
      .enter()
      .append("rect")
      .attr("height", 10)
      .attr('transform', 'translate(' + [150] + ')')
      .attr("y", function (d) { return y(d.TEAMS) })
      .attr("class", "rect")
      .style("fill", "steelblue")
      // .on("mouseover", function (d) {
      //   div.html("hi")
      //     .style("left", (d3.event.pageX + 25) + "px")
      //     .style("top", (d3.event.pageY - 28) + "px");
      // })
      .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div.html(d.APPS)	
            .style("left", (d3.event.pageX) + "px")		
            .style("top", (d3.event.pageY - 28) + "px");	
        })	
      .on("mouseover", function (d) {
        d3.select(this).style("fill", "brown");
      })
      .on("mouseout", function (d) {
        d3.select(this).style("fill", "steelblue");
      })
      .transition().duration(800)
      .attr("width", function (d) {
        return d.APP * 30 + "px"
      });
  }

  update(props) {
    // console.log(props.natApps)
    function drawVis(datasetVis, height) {
      // console.log(datasetVis)
      x.domain([0, d3.max(datasetVis, function (d) { return d.APP; })])
      y.domain(datasetVis.map(function (d) { return d.TEAMS; }));

      const container = d3.select('div.visContainer').append('svg');
      container.attr('viewBox', `-40 0 ${size * 2} ${size * 5}`)
        .style('width', '180%')
        .style('height', '110%');

      container.append("g")
        .attr('transform', 'translate(' + [150] + ')')
        .style("font-size", "15px")
        .call(d3.axisLeft(y));

      var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .attr("x", 20)
        .style("opacity", 0);

      var bars = container.selectAll("rect")
        .data(datasetVis)
        .enter()
        .append("rect")
        .attr("height", height)
        .attr('transform', 'translate(' + [150] + ')')
        .attr("y", function (d) { return y(d.TEAMS) })
        .attr("class", "rect")
        .style("fill", "steelblue")
        // .on("mouseover", function (d) {
        //   div.html("hi")
        //     .style("left", (d3.event.pageX + 25) + "px")
        //     .style("top", (d3.event.pageY - 28) + "px");
        // })
        .on("mouseover", function (d) {
          d3.select(this).style("fill", "brown");
        })
        .on("mouseout", function (d) {
          d3.select(this).style("fill", "steelblue");
        })
        .attr("width", 0)
        .transition().duration(800)
        .attr("width", function (d) {
          return d.APP * 30 + "px"
        });
    }

    if (props.state === 'sweet') {
      var sweet16 = props.sweet.sort(function (x, y) {
        return [d3.ascending(x.APP, y.APP)];
      })
      var bars = d3.selectAll("svg")
        .remove()
        .exit()
      drawVis(props.sweet, 10)

    } else if (props.state === 'elite') {
      var elite8 = props.elite.sort(function (x, y) {
        return d3.ascending(x.APP, y.APP);
      })
      var bars = d3.selectAll("svg")
        .remove()
        .exit()

      drawVis(props.elite, 20)

    } else if (props.state === 'final') {
      var final4 = props.final.sort(function (x, y) {
        return d3.ascending(x.APP, y.APP);
      })
      var bars = d3.selectAll("svg")
        .remove()
        .exit()

      drawVis(props.final, 35)

    } else if (props.state === 'natApps') {
      var natapp = props.natApps.sort(function (x, y) {
        return d3.ascending(x.APP, y.APP);
      })
      var bars = d3.selectAll("svg")
        .remove()
        .exit()

      drawVis(props.natApps, 55)

    } else if (props.state === 'natWins') {
      var natwin = props.natWins.sort(function (x, y) {
        return d3.ascending(x.APP, y.APP);
      })

      var bars = d3.selectAll("svg")
        .remove()
        .exit()
      drawVis(props.natWins, 100)
    }
  }
}

module.exports = TeamHistory;
