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
import store, {persistor} from '../../redux/Store';
import {LOGIN, USERNAME} from '../../redux/Actions/ActonTypes';

export default function Login() {
  const navigation = useNavigation();

  const [focus, setFocus] = useState('');
  const [focus1, setFocus1] = useState('');

  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  // console.log(focus);

  async function Login() {
    if (!user_name) {
      ShowToast('Please enter your user name.', 'error');
      return;
    }
    if (!password) {
      ShowToast('Please enter your password.', 'error');
      return;
    }

    try {
      setLoading(true);
      const url = baseUrl + 'login';

      // const token = await firebase.messaging().getToken();
      // alert(token);
      const body = new FormData();
      body.append('user_name', user_name);
      body.append('password', password);
      body.append('register_id', 'token');

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
        store.dispatch({
          type: LOGIN,
          payload: rslt.result,
        });

        ShowToast('Login successfully.');

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
      <Header source={require('../../assets/Back.png')} />

      <ScrollView>
        <View>
          <Image
            style={{
              resizeMode: 'contain',
              width: Dimensions.get('window').width / 2,
              height: Dimensions.get('window').width / 2,
              // borderWidth: 1,
              alignSelf: 'center',
            }}
            source={require('../../assets/logo_.png')}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder={'Username'}
            Focus_Heading={'Username'}
            onFocus={() => setFocus('Focus')}
            onBlur={() => setFocus('lost')}
            find={focus}
            onChangeText={setUser_name}
            value={user_name}
          />
          <View style={{height: 20}} />
          <TextInput
            placeholder={'Password'}
            Focus_Heading={'Password'}
            onFocus={() => setFocus1('Focus')}
            onBlur={() => setFocus1('lost')}
            find={focus1}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: 20,
            marginVertical: 18,
          }}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <TextFormatted
            style={{fontSize: 12, fontWeight: '600', alignSelf: 'flex-end'}}>
            Forgot password?
          </TextFormatted>
        </TouchableOpacity>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Button
            onPress={() => Login()}
            // onPress={() => navigation.navigate('HomeNavigator')}
            buttontext={'Log in'}
          />
        </View>
        <View style={{height: 80}} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View
            style={{height: 1, backgroundColor: theme.colors.C4C4C4, flex: 1}}
          />
          <TextFormatted
            style={{
              color: theme.colors.Black,
              fontSize: 12,
              marginHorizontal: 13,
            }}>
            OR LOGIN USING
          </TextFormatted>
          <View
            style={{height: 1, backgroundColor: theme.colors.C4C4C4, flex: 1}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 55,
              height: 55,
              marginRight: 30,
            }}
            source={require('../../assets/Facebook.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: 55, height: 55}}
            source={require('../../assets/Google.png')}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <TextFormatted
            style={{
              fontWeight: '500',
              color: theme.colors.OtherText,
              fontSize: 14,
            }}>
            Don’t have an account?{' '}
            <TextFormatted
              onPress={() => navigation.navigate('Signup')}
              style={{
                fontWeight: '700',
                color: theme.colors.secondary,
                fontSize: 14,
              }}>
              Sign up
            </TextFormatted>
          </TextFormatted>
        </View>
      </ScrollView>
    </View>
  );
}
