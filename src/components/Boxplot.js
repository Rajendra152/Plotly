import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Boxplot extends Component {
    constructor(props) {
        super(props)
        var boxPlotly0 = [];
        var boxPlotly1 = [];
        var boxPlotly2 = [];
        for (var i = 0; i <50; i++) {
            boxPlotly0[i]=Math.random();
            boxPlotly1[i]=Math.random()+1;
            boxPlotly2[i]=Math.random()-1;
        }
        var data_Boxplotly_0 = {
            y: boxPlotly0,
            type:'box'
        }
        var data_Boxplotly_1 = {
            y: boxPlotly1,
            type:'box'
        }
        var data_Boxplotly_2 = {
            y: boxPlotly2,
            type:'box'
        }
        this.state = {data:[data_Boxplotly_0,data_Boxplotly_1,data_Boxplotly_2]}
    }
    render() {
        return (
            <div>
                <Plot 
                data={this.state.data}
                />
                
            </div>
        );
    }
}

export default Boxplot;
