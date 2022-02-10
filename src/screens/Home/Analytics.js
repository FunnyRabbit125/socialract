import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import Header from '../../Components/Header';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../Components/TextFormated';

export default function Analytics() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Analytics'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <TextFormatted
          style={{
            fontWeight: '700',
            fontSize: 16,
            paddingVertical: 10,
          }}>
          Donation
        </TextFormatted>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 40} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(174, 125, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 174, 105, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '7',
              strokeWidth: '3',
              stroke: '#e8dcbe',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <TextFormatted
          style={{
            fontWeight: '700',
            fontSize: 16,
            paddingVertical: 10,
          }}>
          Donation
        </TextFormatted>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 40} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(174, 125, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 174, 105, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '7',
              strokeWidth: '3',
              stroke: '#e8dcbe',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <TextFormatted
          style={{
            fontWeight: '700',
            fontSize: 16,
            paddingVertical: 10,
          }}>
          Donation
        </TextFormatted>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 40} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(174, 125, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 174, 105, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '7',
              strokeWidth: '3',
              stroke: '#e8dcbe',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </View>
  );
}
