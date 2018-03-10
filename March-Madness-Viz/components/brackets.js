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
    var treeData =
      {
        "name": "Champion",
        "winners": [
          {
            "name": "Winner Left 1",
            "winners": [
              { "name": "Winner Left 3" },
              { "name": "Winner Left 4" }
            ]
          },
          { "name": "Winner Left 2" }
        ],
        "challengers": [
          {
            "name": "Final 4 South",
            "challengers": [
              {
                "name": "Elite 8 South",
                "challengers": [
                  {
                    "name": "Sweet 16 South",
                    "challengers": [
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (1)" },
                          { "name": "Round 1 (16)" }
                        ]
                      },
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (2)" },
                          { "name": "Round 1 (15)" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Sweet 16 South",
                    "challengers": [
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (3)" },
                          { "name": "Round 1 (14)" }
                        ]
                      },
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (4)" },
                          { "name": "Round 1 (13)" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Elite 8 South",
                "challengers": [
                  {
                    "name": "Sweet 16 South",
                    "challengers": [
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (5)" },
                          { "name": "Round 1 (12)" }
                        ]
                      },
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (6)" },
                          { "name": "Round 1 (11)" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Sweet 16 South",
                    "challengers": [
                      {
                        "name": "Round 2 South ",
                        "challengers": [
                          { "name": "Round 1 (7)" },
                          { "name": "Round 1 (10)" }
                        ]
                      },
                      {
                        "name": "Round 2 South",
                        "challengers": [
                          { "name": "Round 1 (8)" },
                          { "name": "Round 1 (9)" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "Final 4 East",
            "challengers": [
              {
                "name": "Elite 8 East",
                "challengers": [
                  {
                    "name": "Sweet 16 East",
                    "challengers": [
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (1)" },
                          { "name": "Round 1 (16)" }
                        ]
                      },
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (2)" },
                          { "name": "Round 1 (15)" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Sweet 16 East",
                    "challengers": [
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (3)" },
                          { "name": "Round 1 (14)" }
                        ]
                      },
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (4)" },
                          { "name": "Round 1 (13)" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Elite 8 East",
                "challengers": [
                  {
                    "name": "Sweet 16 East",
                    "challengers": [
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (5)" },
                          { "name": "Round 1 (12)" }
                        ]
                      },
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (6)" },
                          { "name": "Round 1 (11)" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Sweet 16 East",
                    "challengers": [
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (7)" },
                          { "name": "Round 1 (10)" }
                        ]
                      },
                      {
                        "name": "Round 2 East",
                        "challengers": [
                          { "name": "Round 1 (8)" },
                          { "name": "Round 1 (9)" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }

    // set the dimensions and margins of the diagram
    var margin = { top: 20, right: 100, bottom: 30, left: 100 },
      width = 660 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    var treemapr = d3.tree()
      .size([height, width]);

    var treemapl = d3.tree()
      .size([height, width]);

    //  assigns the data to a hierarchy using parent-child relationships
    var nodesr = d3.hierarchy(treeData, function (d) {
      return d.challengers;
    });

    var nodesl = d3.hierarchy(treeData, function (d) {
      return d.winners;
    });

    // maps the node data to the tree layout
    nodesr = treemapr(nodesr);
    nodesl = treemapl(nodesl);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(node).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
      g = svg.append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    var link = g.selectAll(".link")
      .data(nodesr.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .attr("d", function (d) {
        return "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x;
      })
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", "1.5px");

    // adds each node as a group
    var node = g.selectAll(".node")
      .data(nodesr.descendants())
      .enter().append("g")
      .attr("class", function (d) {
        return "node" +
          (d.children ? " node--internal" : " node--leaf");
      })
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // adds the circle to the node
    node.append("circle")
      .attr("r", 5)
      .style("cursor", "pointer")
      .style("fill", "#fff")
      .style("stroke", "steelblue")
      .style("stroke-width", "1.5px")


    // adds the text to the node
    node.append("text")
      .attr("dy", ".35em")
      .attr("x", function (d) { return d.children ? -13 : 13; })
      .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
      })
      .style("font-size", "10px")
      .text(function (d) { return d.data.name; });



  }

  update(props) {

  }
}

module.exports = Brackets;
