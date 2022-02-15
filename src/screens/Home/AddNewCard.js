import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import Header from '../../Components/Header';
import CustomTextInput from '../../Components/TextInput';
import Button from '../../Components/Button';

export default function AddNewCard() {
  const navigation = useNavigation();
  const [focus1, setFocus1] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Add New Card'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />
      <View style={{alignItems: 'center'}}>
        <View style={{height: 20}} />
        <CustomTextInput
          placeholder={'Bank Name'}
          Focus_Heading={'Bank Name'}
          onFocus={() => setFocus1('Focus')}
          onBlur={() => setFocus1('lost')}
          find={focus1}
        />
        <View style={{height: 20}} />
        <CustomTextInput
          placeholder={'Bank Account Number'}
          Focus_Heading={'Bank Account Number'}
          onFocus={() => setFocus1('Focus')}
          onBlur={() => setFocus1('lost')}
          find={focus1}
        />
        <View style={{height: 20}} />
        <CustomTextInput
          placeholder={'IFSC code0'}
          Focus_Heading={'IFSC code0'}
          onFocus={() => setFocus1('Focus')}
          onBlur={() => setFocus1('lost')}
          find={focus1}
        />
        <View style={{height: 20}} />
        <CustomTextInput
          placeholder={'Bank Holder Name'}
          Focus_Heading={'Bank Holder Name'}
          onFocus={() => setFocus1('Focus')}
          onBlur={() => setFocus1('lost')}
          find={focus1}
        />
        <View style={{height: 20}} />
        <CustomTextInput
          placeholder={'Bank Branch'}
          Focus_Heading={'Bank Branch'}
          onFocus={() => setFocus1('Focus')}
          onBlur={() => setFocus1('lost')}
          find={focus1}
        />
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 40}}>
        <Button
          buttontext={'Add Card'}
          onPress={() => navigation.navigate('AddNewCard')}
        />
      </View>
    </View>
  );
}
