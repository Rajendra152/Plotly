import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Donutplot extends Component {
    constructor(props) {
        super(props)
        var traceA = {
            type: "pie",
            values: [8149300, 4916438, 4776980, 3100950, 2083210],
            labels: ['Russia', 'Canada', 'Brazil', 'United States', 'China'],
            hole: 0.25,
            //pull: [0.1, 0, 0, 0, 0],
            direction: 'clockwise',
            marker: {
              colors: ['#CDDC39', '#673AB7', '#F44336', '#00BCD4', '#607D8B'],
              line: {
                color: 'black',
                width: 3
              }
            },
            textfont: {
              family: 'Lato',
              color: 'white',
              size: 18
            },
            hoverlabel: {
              bgcolor: 'black',
              bordercolor: 'black',
              font: {
                family: 'Lato',
                color: 'white',
                size: 18
              }
            }
          };
          
          var data = [traceA];
          
          var layout = {
            title: "Area Under Forest for Different Countries"
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

export default Donutplot;
