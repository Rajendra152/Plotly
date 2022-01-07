import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Timeplot extends Component {
    render() {
        return (
            <div>
                <Plot 
                data={[{
                    x:['2022-01-06 12:51:23','2022-01-05 10:34:25','2022-01-04 3:45:56','2022-01-02 07:15:23'],
                    type: 'time',
                }]}
                />
            </div>
        );
    }
}

export default Timeplot;
