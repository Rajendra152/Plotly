import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Barplot extends Component {
    constructor(props) {
        super(props)
        var primaryGDP = {
            x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
            y: [215364, 964772, 56764, 27959, 18549, 47277, 391672, 37050],
            type: 'bar',
            name: 'Agricultural Sector'
          };

          var secondaryGDP = {
            x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
            y: [3427876, 4464876, 1300833, 982067, 556477, 455355, 580755, 448305],
            type: 'bar',
            name: 'Industrial Sector'
          };

          var tertiaryGDP = {
            x: ["United States", "China", "Japan", "Germany", "United Kingdom", "France", "India", "Italy"],
            y: [14303756, 5788633, 3377434, 2484874, 2074864, 1985647, 1280813, 1367145],
            type: 'bar',
            name: 'Service Sector'
          };

          var data = [primaryGDP, secondaryGDP, tertiaryGDP];

          var layout = {
            title:'Nominal GDP Sector Composition of Top 8 Countries',
            barmode: 'stack'                               //barmode may be 'relative','group','stack','overlay'
          };

				//code for another graph 
        // var lightGreen = 'rgba(0,255,50,0.6)';
        // var redShade = 'rgba(255,50,0,0.6)';

        // var traceA = {
        //     x: ["Car A", "Car B", "Car C", "Car D", "Car E", "Car F", "Car G", "Car H"],
        //     y: [100, 80, 40, 160, 75, 93, 8, 125],
        //     type: 'bar',
        //     text: ['', '', '', 'Overspeeding', '', 'Overspeeding', '', 'Overspeeding'],
        //     textposition: 'inside',
        //     width: 0.8,
        //     base: [-40, 10, 50, -45, 0, 15, 60, -20],
        //     marker: {
        //         color: [lightGreen, lightGreen, lightGreen, redShade, lightGreen, redShade, lightGreen, redShade],
        //         line: {
        //             color: 'black',
        //             width: 1
        //         }
        //     }
        // };

        // var data = [traceA];

        // var layout = {
        //     title: 'Speed of Cars (km/hr)',
        //     yaxis: {
        //         dtick: 15
        //     }
        // };

        this.state = { data: data, layout: layout }
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

export default Barplot;
