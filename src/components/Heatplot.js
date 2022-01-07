import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Heatplot extends Component {
    render() {
        return (
            <div>
                <Plot 
                data={[{
                    z:[[54,null,20,25,1],[23,34,24,67,54],[36,23,89,21,null],[null,56,78,23,12]],
                    x:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    y:['week1', 'week2', 'week3'],
                    type:'heatmap',
                    hoverongaps: false

                }]}
                />

            </div>
        );
    }
}

export default Heatplot;
