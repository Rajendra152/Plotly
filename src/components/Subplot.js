import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Subplot extends Component {
    constructor(props) {
        super(props)
        var trace0={
            x: [18,26,39],
            y: [25,37,44],
            type: 'scatter',
        }
        var trace1={
            x: [10,20,30],
            y: [6,15,50],
            xaxis: 'x2',
            yaxis: 'y',
            type: 'scatter',
        }
        var trace2={
            x: [13,24,36],
            y: [600,400,300],
            xaxis: 'x',
            yaxis: 'y3',
            type: 'scatter',
        }
        var trace3={
            x: [2000,7000,3000],
            y: [200,600,900],
            xaxis: 'x4',
            yaxis: 'y4',
            type: 'scatter',
        }
        var data=[trace0,trace1,trace2,trace3]
        var layout={
            grid:{
                rows:2,
                columns:2,
                subplots:[['xy','x2y'],['xy3','x4y4']],
                roworder:'bottom to top'
            }
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

export default Subplot;
