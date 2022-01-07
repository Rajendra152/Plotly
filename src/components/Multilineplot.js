import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Multilineplot extends Component {
    constructor(props) {
        super(props)
        var traceLinear = {
            x: [1, 5, 13, 24, 35, 46, 60],
            y: [180, 160, 170, 165, 175, 175, 149],
            type: 'scatter',
            name: 'Linear Shape',
            line: {
                shape: 'linear',
                color: 'rgb(255, 157, 98)'
            }
        };

        var traceSpline = {
            x: [1, 5, 13, 24, 35, 46, 60],
            y: [150, 130, 140, 135, 145, 145, 119],
            type: 'scatter',
            name: 'Spline Shape',
            line: {
                shape: 'spline',
                color: 'rgb(157, 255, 98)'
            }
        };

        var traceVH = {
            x: [1, 5, 13, 24, 35, 46, 60],
            y: [120, 100, 110, 105, 115, 115, 89],
            type: 'scatter',
            name: 'VH Shape',
            line: {
                shape: 'vh',
                color: 'rgb(157, 98, 255)'
            }
        };

        var traceHVH = {
            x: [1, 5, 13, 24, 35, 46, 60],
            y: [90, 70, 80, 75, 85, 85, 59],
            type: 'scatter',
            name: 'HVH Shape',
            line: {
                shape: 'hvh',
                color: 'rgb(98, 157, 255)'
            }
        };

        var traceSplineB = {
            x: [1, 5, 13, 24, 35, 46, 60],
            y: [60, 40, 50, 45, 55, 55, 29],
            type: 'scatter',
            name: 'Spline Shape (1.3)',
            line: {
                shape: 'spline',
                smoothing: 1.3,
                color: 'rgb(255, 98, 157)'
            }
        };

        var data = [traceLinear, traceSpline, traceVH, traceHVH, traceSplineB];

        var layout = {
            title: 'Different Shapes of a Line Chart',
            yaxis: {
                rangemode: 'tozero'
            },
            plot_bgcolor: 'transparent'
        };


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

export default Multilineplot;
