import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Sunburstplot extends Component {
    constructor(props) {
        super(props)
        var data = [{
            type: "sunburst",
            labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
            parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
            values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
            outsidetextfont: {size: 20, color: "#377eb8"},
            leaf: {opacity: 0.4},
            marker: {line: {width: 2}},
          }];
          
          var layout = {
            margin: {l: 0, r: 0, b: 0, t: 0},
            width: 500,
            height: 500
          };
          this.state={data:data,layout:layout}
          
    }
    render() {
        return (
            <div>
                <Plot 
                data={this.state.data}
                layout={this.state.layout}
                />
            </div>
        );
    }
}

export default Sunburstplot;
