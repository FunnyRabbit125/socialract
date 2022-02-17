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

export default function Login() {
  const [focus, setFocus] = useState('');
  const [focus1, setFocus1] = useState('');
  const navigation = useNavigation();
  // console.log(focus);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
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
          />
          <View style={{height: 20}} />
          <TextInput
            placeholder={'Password'}
            Focus_Heading={'Password'}
            onFocus={() => setFocus1('Focus')}
            onBlur={() => setFocus1('lost')}
            find={focus1}
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
            onPress={navigation.navigate('HomeNavigator')}
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
