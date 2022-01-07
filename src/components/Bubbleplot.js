import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Bubbleplot extends Component {
    constructor(props) {
        super(props)
        var traceA = {
            type: "scatter",
            mode: "markers",
            x: [5, 13, 24, 35, 46, 60],
            y: [40, 70, 65, 15, 75, 49],
            marker: {
              color: [35, 10, 50, 40, 18, 30],
              colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']],
              cmin: 0,
              cmax: 50,
              size: [600, 1200, 800, 400, 1500, 2000],
              sizemode: 'area',
              showscale: true,
              colorbar: {
                thickness: 10,
                y: 0.5,
                ypad: 0,
                title: 'Tree Density',
                titleside: 'bottom',
                outlinewidth: 1,
                outlinecolor: 'black',
                tickfont: {
                  family: 'Lato',
                  size: 14,
                  color: 'green'
                }
              }
            }
          };
          
          var data = [traceA];
          
          var layout = {
            title: "A Bubble Chart in Plotly"
          };
          this.state= {data:data, layout: layout}
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

export default Bubbleplot;
