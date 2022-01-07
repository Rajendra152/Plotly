import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Pieplot extends Component {
    render() {
        return (
            <div>
                <Plot
                data={[{
                    values: [8149300, 4916438, 4776980, 3100950, 2083210],
                    labels: ['Russia', 'Canada', 'Brazil', 'United States', 'China'],
                    type:'pie'
                }]}
                layout={{
                    width:500,
                    height:500,
                    title:'simple pie chart'
                }}
                />
            </div>
        );
    }
}

export default Pieplot;
