import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../Components/Statusbar';
import {theme} from '../../Utils/theme';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
import {Image} from 'react-native';
import TextFormatted from '../../Components/TextFormated';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

export default function ForgotPassword() {
  const [focus, setFocus] = useState('');
  const navigation = useNavigation();
  // console.log(focus);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />
      <Header
        onPress={() => navigation.goBack()}
        source={require('../../assets/Back.png')}
      />

      <ScrollView>
        <View style={{alignItems: 'center', marginHorizontal: 20}}>
          <Image
            style={{
              resizeMode: 'contain',
              width: Dimensions.get('window').width / 2,
              height: Dimensions.get('window').width / 2.5,
            }}
            source={require('../../assets/LOGO_green.png')}
          />
          <TextFormatted style={{fontSize: 18, fontWeight: 'bold'}}>
            Forgot Password?
          </TextFormatted>
          <TextFormatted
            style={{
              color: theme.colors.OtherText,
              textAlign: 'center',
              marginVertical: 15,
            }}>
            Please enter your email addressyou will recieve a link to create a
            new password.
          </TextFormatted>
        </View>

        <View style={{alignItems: 'center', marginTop: 25}}>
          <TextInput
            placeholder={'Username'}
            Focus_Heading={'Username'}
            onFocus={() => setFocus('Focus')}
            onBlur={() => setFocus('lost')}
            find={focus}
          />
          <View style={{height: 20}} />
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 30}}>
          <Button buttontext={'Send'} />
        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}
