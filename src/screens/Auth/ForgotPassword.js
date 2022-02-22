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
import {ShowToast} from '../../Utils/ToastFunction';
import {baseUrl} from '../../Utils/constance';
import Loading from '../../Components/Loading';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [focus, setFocus] = useState('');
  const [user_name, setUser_name] = useState('');
  const [loading, setLoading] = useState(false);
  // console.log(focus);

  async function Forgot_password() {
    if (!user_name) {
      ShowToast('Please enter your ragistered email address.', 'error');
      return;
    }

    try {
      setLoading(true);
      const url = baseUrl + 'login';

      const body = new FormData();
      body.append('email', user_name);

      const res = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      console.log(res);
      const rslt = await res.json();
      console.log(rslt);

      if (rslt.status == '1') {
        ShowToast(
          'We have sent a link to email for change your password, Please check your email',
        );
        navigation.goBack();

        // navigation.replace('HomeNavigator', (screen = 'Bottomtab'));
      } else {
        ShowToast(rslt.message || 'Unknown error', 'error');
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // alert('An error occured.');
      ShowToast('An error occured.', 'error');

      console.log(e);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Loading size={60} visible={loading} color={theme.colors.secondary} />

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
            placeholder={'email address'}
            Focus_Heading={'email'}
            onFocus={() => setFocus('Focus')}
            onBlur={() => setFocus('lost')}
            find={focus}
            onChangeText={setUser_name}
            value={user_name}
          />
          <View style={{height: 20}} />
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 30}}>
          <Button onPress={() => Forgot_password()} buttontext={'Send'} />
        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}
