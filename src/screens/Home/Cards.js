import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

export default function Cards() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Cards'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />
      <ImageBackground
        style={{
          height: Dimensions.get('window').height / 4,
          width: Dimensions.get('window').width - 40,
          alignSelf: 'center',
          marginTop: 40,
        }}
        imageStyle={{
          height: Dimensions.get('window').height / 4,
          width: Dimensions.get('window').width - 40,
          alignSelf: 'center',
          alignItems: 'center',
        }}
        source={require('../../assets/debit_card.png')}>
        <Image
          style={{
            height: 55,
            width: 55,
            resizeMode: 'contain',
            position: 'absolute',
            top: -20,
            right: -10,
          }}
          source={require('../../assets/Delete.png')}
        />
      </ImageBackground>
      <View style={{marginHorizontal: 20, marginVertical: 40}}>
        <Button
          buttontext={'Add New Card'}
          onPress={() => navigation.navigate('AddNewCard')}
        />
      </View>
    </View>
  );
}
