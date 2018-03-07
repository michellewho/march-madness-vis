const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');


const size = 600;

class TeamHistory extends D3Component {

  initialize(node, props) {
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    

  }

  update(props) {

  }
}

module.exports = TeamHistory;
