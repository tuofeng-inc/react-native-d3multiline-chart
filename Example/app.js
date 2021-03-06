import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import Svg, {Circle, Line, G, Path, Text, Rect} from 'react-native-svg';
import * as d3 from 'd3';
import * as scale from 'd3-scale';
import _ from 'lodash';
import {MultiLineChart} from 'react-native-d3multiline-chart';

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;

var data = [
  [
    {
      y: '202',
      x: 2000,
    },
    {
      y: '215',
      x: 2001,
    },
    {
      y: '179',
      x: 2002,
    },
    {
      y: '199',
      x: 2003,
    },
    {
      y: '134',
      x: 2003,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
  [
    {
      y: '152',
      x: 2000,
    },
    {
      y: '189',
      x: 2002,
    },
    {
      y: '179',
      x: 2004,
    },
    {
      y: '199',
      x: 2006,
    },
    {
      y: '134',
      x: 2008,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
  [
    {
      y: '200',
      x: 2000,
    },
    {
      y: '200',
      x: 2001,
    },
    {
      y: '200',
      x: 2002,
    },
    {
      y: '200',
      x: 2003,
    },
    {
      y: '134',
      x: 2003,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
];

var dataB = [
  [
    {
      y: '200',
      x: 2000,
    },
    {
      y: '200',
      x: 2001,
    },
    {
      y: '200',
      x: 2002,
    },
    {
      y: '200',
      x: 2003,
    },
    {
      y: '134',
      x: 2003,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
  [
    {
      y: '152',
      x: 2000,
    },
    {
      y: '189',
      x: 2002,
    },
    {
      y: '179',
      x: 2004,
    },
    {
      y: '199',
      x: 2006,
    },
    {
      y: '134',
      x: 2008,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
  [
    {
      y: '202',
      x: 2000,
    },
    {
      y: '215',
      x: 2001,
    },
    {
      y: '179',
      x: 2002,
    },
    {
      y: '199',
      x: 2003,
    },
    {
      y: '134',
      x: 2003,
    },
    {
      y: '176',
      x: 2010,
    },
  ],
];

let leftAxisData = [134, 144, 154, 164, 174, 184, 194, 204, 215];
let bottomAxisData = [2000, 2002, 2004, 2006, 2008, 2010];
let legendColor = ['#00b7d4', 'red', 'black'];
let legendText = ['sales', 'year', 'profit'];
let minX = 2000, maxX = 2010;
let minY = 134, maxY = 215;

//since there are only two lines
var Color = ['#00b7d4', 'red', 'black'];
//general data to represent ticks in y-axis and it doesn't take part in calculation
let bottomAxisDataToShow = [
  'Jan 2017',
  'Feb 2017',
  'Mar 2017',
  'Apr 2017',
  'May 2017',
  'Jun 2017',
  'Jul 2017',
  'Aug 2017',
];
//general data to represent ticks in y-axis and it doesn't take part in calculation
let leftAxisDataToShow = [
  '10%',
  '20%',
  '30%',
  '40%',
  '50%',
  '60%',
  '70%',
  '80%',
  '90%',
];
export default class Example extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: data,
    };
  }
  render () {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <MultiLineChart
          data={data}
          leftAxisData={leftAxisData}
          bottomAxisData={bottomAxisData}
          legendColor={legendColor}
          legendText={legendText}
          minX={minX}
          maxX={maxX}
          minY={minY}
          maxY={maxY}
          scatterPlotEnable={false}
          dataPointsVisible={true}
          Color={Color}
          bottomAxisDataToShow={bottomAxisDataToShow}
          circleLegendType={true}
          fillArea={true}
          yAxisGrid={false}
          xAxisGrid={false}
          hideXAxis={false}
          hideYAxis={false}
          inclindTick={false}
          pointDataToShowOnGraph=""
          animation={true}
          duration={1500}
          delay={1000}
          GraphHeight={300}
          GraphWidth={deviceWidth}
          chartWidth={deviceWidth - 20}
          chartHeight={250}
          staggerLength={220}
          speed={50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
