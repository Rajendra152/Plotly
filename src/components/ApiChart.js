//https://data.cityofnewyork.us/Health/COVID-19-Daily-Counts-of-Cases-Hospitalizations-an/rc75-m7u3

import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Apichart extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }
    componentDidMount() {
        const endpoint = "https://data.cityofnewyork.us/resource/rc75-m7u3.json"
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            this.setState({data:data})
        })

    }
    transformData(data) {
        let plot_data=[];

        let x= [];
        let y= [];
        data.map(each => {
            x.push(each.date_of_interest)
            y.push(each.case_count)
        })
        plot_data['x'] = x;
        plot_data['y'] = y;
        return plot_data;
    }
    render() {
        return (
            <div>
               <Plot 
                  data = {[
                      {type:'scatter',
                       mode:'lines',
                       x:this.transformData(this.state.data)['x'],
                       y:this.transformData(this.state.data)['y'],
                       marker:{color:'black'}

                }
                  ]}
                  layout = {{width:1000,height:600,title:'Covid update'}}
               /> 
            </div>
        );
    }
}

export default Apichart;
