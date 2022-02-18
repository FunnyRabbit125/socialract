import React from 'react';
import {View} from 'react-native';
import Header from '../../Components/Header';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import {theme} from '../../Utils/theme';

export default function Safety({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />

      <Header
        onPress={() => navigation.goBack()}
        source={require('../../assets/Back.png')}
        backgroundColor={theme.colors.primary}
        Headertext={'Terms and Conditions'}
      />

      <TextFormatted>Terms and Conditions</TextFormatted>
    </View>
  );
}
