import React, { Component } from 'react';
//import Plot from 'react-plotly.js';
import Barplot from './components/Barplot.js';
import Pieplot from './components/Pieplot.js';
import Boxplot from './components/Boxplot.js';
import Timeplot from './components/Timeplot.js';
import Heatplot from './components/Heatplot.js';
import Subplot from './components/Subplot.js';
import Multilineplot from './components/Multilineplot.js';
import Colorline from './components/colorline.js';
import Bubbleplot from './components/Bubbleplot.js'; 
import Dotplot from './components/Dotplot.js';
import Donutplot from './components/Donutplot.js';
import Guageplot from './components/Guageplot.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Multi-line charts</h1>
        <Multilineplot />
        <h1>Colouring the area between the lines</h1>
        <Colorline />
        <h1>Subplot chart</h1>
        <Subplot />
        <h1>Bar Plot</h1>
        <Barplot />
        <h1>Pie chart</h1>
        <Pieplot />
        <h1>Donut chart</h1>
        <Donutplot />
        <h1>Gauge chart</h1>
        <Guageplot />
        <h1>Bubble chart</h1>
        <Bubbleplot />
        <h1>Dot chart</h1>
        <Dotplot />
        <h1>Box chart</h1>
        <Boxplot />
        <h1>Time chart</h1>
        <Timeplot />
        <h1>Heat chart</h1>
        <Heatplot />
      </div>
    );
  }
}

export default App;
