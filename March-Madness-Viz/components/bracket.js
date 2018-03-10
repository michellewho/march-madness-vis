const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;
var len = 250;
var padding = 10;
var y = 50;
var x = 50;
var root;

class Bracket extends D3Component {

  initialize(node, props) {

    const svg = d3.select('.round1west');
    console.log(svg)
    // console.log(props)

    // console.log(svgString)
    // const svg = this.svg = d3.select('svg.bracketstructure');

    // svg.selectAll('g.round1west')
    // .on("mouseover", function (d) {
    //   d3.select(this).style("fill", "brown");
    // })
    // const svg = d3.select('body').select('.bracketstructure svg');
    // const svg = d3.select(".bracketstructure").append('div').attr("class","fthis")
    // console.log(svg)
    // d3.select

  }

  update(props) {
    const svg = d3.select('.round1west');
    console.log(svg)

  }
}

module.exports = Bracket;
