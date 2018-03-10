const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;
var len = 250;
var padding = 10;
var y = 50;
var x = 50;

class CustomD3Component extends D3Component {

  initialize(node, props) {

    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg.append('rect')
      .attr("height", len * 2)
      .attr("width", len - padding)
      .attr("y", y)
      .attr("class", "rect")
      .style("fill", 'LimeGreen')
      .attr("x", -300)
      .transition().duration(2000)
      .attr("x", x)

    svg.append('rect')
      .attr("height", len * 2)
      .attr("width", len - padding)
      .attr("y", y)
      .attr("class", "rect")
      .style("fill", 'brown')
      .attr("x", 850)
      .transition().duration(2000)
      .attr("x", x + 250)

    for (var i = 0; i < 2; i++) {
      svg.append('text').text('1/2')
        .attr('x', 125 + (i * 250))
        .attr('y', 300)
        .attr('font-size', 60)
        .attr('fill', 'white')
        .style("opacity", 0)
        .transition().duration(1500)
        .style("opacity", 0)
        .transition().duration(1000)
        .style("opacity", 1);
    }
  }

  update(props) {
    d3.selectAll('rect')
      .transition().duration(1500)
      .attr('y', 600)
      .remove();

    d3.selectAll('text')
      .transition().duration(1000)
      .style("opacity", 0)
      .remove();

    if (props.state == '2') {
      this.svg.append('rect')
        .transition(1500)
        .attr("height", 500)
        .attr("width", 240)
        .attr("y", y)
        .attr("class", "rect")
        .style("fill", 'LimeGreen')
        .attr("x", -300)
        .transition().duration(2000)
        .attr("x", x)

      this.svg.append('rect')
        .attr("height", 500)
        .attr("width", 240)
        .attr("y", y)
        .attr("class", "rect")
        .style("fill", 'brown')
        .attr("x", 850)
        .transition().duration(2000)
        .attr("x", x + 10 + 240)

      for (var i = 0; i < 2; i++) {
        this.svg.append('text').text('1/2')
          .attr('x', 125 + (i * 250))
          .attr('y', 300)
          .attr('font-size', 60)
          .attr('fill', 'white')
          .style("opacity", 0)
          .transition().duration(1500)
          .style("opacity", 0)
          .transition().duration(1000)
          .style("opacity", 1);
      }

    } else if (props.state == '4') {
      this.svg.append('rect')
        .transition(1500)
        .attr("height", 240)
        .attr("width", 110)
        .attr("y", y)
        .attr("class", "rect")
        .style("fill", 'LimeGreen')
        .attr("x", -300)
        .transition().duration(2000)
        .attr("x", x)

      this.svg.append('rect')
        .transition(1500)
        .attr("height", 240)
        .attr("width", 110)
        .attr("y", y + 250)
        .attr("class", "rect")
        .style("fill", 'brown')
        .attr("x", -300)
        .transition().duration(2000)
        .attr("x", x)

      for (var i = 0; i < 2; i++) {
        this.svg.append('rect')
          .transition(1500)
          .attr("height", 240)
          .attr("width", 110)
          .attr("y", y + i * 250)
          .attr("class", "rect")
          .style("fill", 'brown')
          .attr("x", -300)
          .transition().duration(2000)
          .attr("x", x + 120)
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('rect')
          .transition(1500)
          .attr("height", 240)
          .attr("width", 110)
          .attr("y", y)
          .attr("class", "rect")
          .style("fill", 'brown')
          .attr("x", 850)
          .transition().duration(2000)
          .attr("x", x + 240 + i * 120)
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('rect')
          .transition(1500)
          .attr("height", 240)
          .attr("width", 110)
          .attr("y", y + 250)
          .attr("class", "rect")
          .style("fill", 'brown')
          .attr("x", 850)
          .transition().duration(2000)
          .attr("x", x + 240 + i * 120)
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('text').text('1/8')
          .attr('x', 90 + i * 120)
          .attr('y', 170)
          .attr('font-size', 30)
          .attr('fill', 'white')
          .style("opacity", 0)
          .transition().duration(1500)
          .style("opacity", 0)
          .transition().duration(1000)
          .style("opacity", 1);
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('text').text('1/8')
          .attr('x', 90 + i * 120)
          .attr('y', 170 + 240)
          .attr('font-size', 30)
          .attr('fill', 'white')
          .style("opacity", 0)
          .transition().duration(1500)
          .style("opacity", 0)
          .transition().duration(1000)
          .style("opacity", 1);
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('text').text('1/8')
          .attr('x', 320 + i * 120)
          .attr('y', 170)
          .attr('font-size', 30)
          .attr('fill', 'white')
          .style("opacity", 0)
          .transition().duration(1500)
          .style("opacity", 0)
          .transition().duration(1000)
          .style("opacity", 1);
      }

      for (var i = 0; i < 2; i++) {
        this.svg.append('text').text('1/8')
          .attr('x', 320 + i * 120)
          .attr('y', 170 + 240)
          .attr('font-size', 30)
          .attr('fill', 'white')
          .style("opacity", 0)
          .transition().duration(1500)
          .style("opacity", 0)
          .transition().duration(1000)
          .style("opacity", 1);
      }


    }
  }
}

module.exports = CustomD3Component;
