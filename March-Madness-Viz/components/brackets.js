const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;
var len = 250;
var padding = 10;
var y = 50;
var x = 50;
var root;

class Brackets extends D3Component {

  initialize(node, props) {
    root = props.data;

    // const svg = this.svg = d3.select(node).append('svg');
    // svg.attr('viewBox', `0 0 ${size} ${size}`)
    //   .style('width', '100%')
    //   .style('height', 'auto');

    var margin = { top: 30, right: 10, bottom: 10, left: 10 },
      width = 960 - margin.left - margin.right,
      halfWidth = width / 2,
      height = 500 - margin.top - margin.bottom,
      i = 0,
      duration = 500,
      root;

    var getChildren = function (d) {
      var a = [];
      if (d.winners) for (var i = 0; i < d.winners.length; i++) {
        d.winners[i].isRight = false;
        d.winners[i].parent = d;
        a.push(d.winners[i]);
      }
      if (d.challengers) for (var i = 0; i < d.challengers.length; i++) {
        d.challengers[i].isRight = true;
        d.challengers[i].parent = d;
        a.push(d.challengers[i]);
      }
      return a.length ? a : null;
    };

    var tree = d3.tree()
      .size([height, width]);

    var diagonal = (function link(d) {
      return "M" + d.source.y + "," + d.source.x
        + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
        + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
        + " " + d.target.y + "," + d.target.x;
    });

    var elbow = function (d, i) {
      var source = calcLeft(d.source);
      var target = calcLeft(d.target);
      var hy = (target.y - source.y) / 2;
      if (d.isRight) hy = -hy;
      return "M" + source.y + "," + source.x
        + "H" + (source.y + hy)
        + "V" + target.x + "H" + target.y;
    };
    var connector = elbow;

    var calcLeft = function (d) {
      var l = d.y;
      if (!d.isRight) {
        l = d.y - halfWidth;
        l = halfWidth - l;
      }
      return { x: d.x, y: l };
    };

    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', '100%');


    //   var t1 = d3.layout.tree().size([height, halfWidth]).children(function (d) { return d.winners; }),
    //     t2 = d3.layout.tree().size([height, halfWidth]).children(function (d) { return d.challengers; });
    //   t1.nodes(root);
    //   t2.nodes(root);

    //   var rebuildChildren = function (node) {
    //     node.children = getChildren(node);
    //     if (node.children) node.children.forEach(rebuildChildren);
    //   }
    //   rebuildChildren(root);
    //   root.isRight = false;
    //   update(root);
    // });

    root.x0 = height / 2;
    root.y0 = width / 2;
    var t1 = d3.tree().size([height, halfWidth]).children(function (d) { return d.winners; }),
      t2 = d3.tree().size([height, halfWidth]).children(function (d) { return d.challengers; });


    console.log(t1)



  }

  update(props) {

  }
}

module.exports = Brackets;
