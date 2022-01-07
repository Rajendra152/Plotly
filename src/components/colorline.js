import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Colorline extends Component {
    constructor(props) {
        super(props)
        var traceA = {
            x: [1, 8, 13, 24, 35, 46, 60],
            y: [180, 150, 210, 165, 175, 185, 220],
            type: 'scatter',
            name: 'marker: circle',
            fill: 'tonexty',
            marker: {
              symbol: 'circle',
              size: 10
            }
          };
          
          var traceB = {
            x: [1, 8, 13, 24, 35, 46, 60],
            y: [130, 120, 160, 135, 145, 145, 119],
            type: 'scatter',
            name: 'marker: diamond',
            fill: 'tonexty',
            marker: {
              symbol: 'diamond',
              size: 10
            }
          };
          
          var traceC = {
            x: [1, 8, 13, 24, 35, 46, 60],
            y: [110, 100, 105, 100, 115, 85, 95],
            type: 'scatter',
            name: 'marker: pentagon',
            fill: 'tonexty',
            marker: {
              symbol: 'pentagon',
              size: 12
            }
          };
          
          var traceD = {
            x: [1, 8, 13, 24, 35, 46, 60],
            y: [70, 80, 60, 85, 75, 50, 59],
            type: 'scatter',
            name: 'marker: star',
            fill: 'tonexty',
            marker: {
              symbol: 'star',
              size: 12
            }
          };
          
          var traceE = {
            x: [1, 8, 13, 24, 35, 46, 60],
            y: [30, 20, 30, 15, 55, 15, 30],
            type: 'scatter',
            name: 'dash: 4px, 4px, 10px',
            fill: 'tonexty',
            marker: {
              symbol: 'bowtie',
              size: 12
            }
          };
          
          var data = [traceE, traceD, traceC, traceB, traceA];
          
          var layout = {
            title:'Dash values for a Line Chart',
            xaxis: {
              rangemode: 'tozero'
            },
            yaxis: {
              rangemode: 'tozero'
            }
          };
         this.state={data: data,layout:layout};          
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

export default Colorline;
