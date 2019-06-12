import React from 'react';
import PureChart from 'react-native-pure-chart';
import { colors } from '../../utils';

const TeamRoundChart = ({ roundData, screenWidth }) => {
  return (
    <PureChart
      data={roundData}
      type="bar"
      height={220}
      defaultColumnWidth={25}
      defaultColumnMargin={13}
      numberOfYAxisGuideLine={16}
      width={screenWidth}
      backgroundColor={colors.white}
      highlightColor={colors.red}
      showEvenNumberXaxisLabel={false}
    />
  );
};

export default TeamRoundChart;
