import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Statusbar from '../../Components/Statusbar';
import {theme} from '../../Utils/theme';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
import {Image} from 'react-native';
import TextFormatted from '../../Components/TextFormated';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {launchImageLibrary} from 'react-native-image-picker';
import {SIGNUP, USERNAME} from '../../redux/Actions/ActonTypes';
import store from '../../redux/Store';
import Geolocation from '@react-native-community/geolocation';
import RNLocation from 'react-native-location';
import {baseUrl, LocationLink, mapsApiKey} from '../../Utils/constance';
import {ShowToast} from '../../Utils/ToastFunction';
import {CheckBox, Icon} from 'react-native-elements';
import Loading from '../../Components/Loading';
import {useSelector} from 'react-redux';

export default function Signup() {
  const navigation = useNavigation();

  const [focus, setFocus] = useState('');
  const [focus1, setFocus1] = useState('');
  const [focus2, setFocus2] = useState('');
  const [terms_and_condition, setTerms_and_condition] = useState(false);
  const [location, setLocation] = useState('Location...');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = useSelector(state => state.auth);

  // alert(JSON.stringify(auth));

  const [uri, setUri] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [account_type, setaccount_type] = useState('Personal');

  const pickImageAndUpload = () => {
    launchImageLibrary({quality: 0.5}, fileobj => {
      if (!fileobj.didCancel) setUri(fileobj.assets[0]);
    });
  };

  async function Signup() {
    if (!uri) {
      ShowToast('You must upload image.', 'error');
      return;
    }
    if (!email) {
      ShowToast('Please enter email address.', 'error');
      return;
    }
    if (!password) {
      ShowToast('Please enter Password.', 'error');
      return;
    }
    if (!confirm_password) {
      ShowToast('Please enter password again.', 'error');
      return;
    }
    if (password != confirm_password) {
      ShowToast('Password and confirm password should be the same', 'error');
      return;
    }
    if (!account_type) {
      ShowToast('Please select your account type.', 'error');
      return;
    }
    if (!terms_and_condition) {
      ShowToast('Please accept all terms and conditions.', 'error');
      return;
    }

    try {
      setLoading(true);
      const url = baseUrl + 'signup';

      // const token = await firebase.messaging().getToken();
      // alert(token);
      const body = new FormData();
      body.append('email', email);
      body.append('password', password);
      body.append('register_id', 'token');
      body.append('lat', latitude);
      body.append('lon', longitude);
      body.append('type', account_type);
      body.append('image', {
        uri: uri.uri,
        type: uri.type,
        name: uri.fileName,
      });
      console.log(body);
      // setLoading(false);

      // return;
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
          type: SIGNUP,
          payload: {...rslt.result, Modal: true},
        });

        ShowToast('Signup successfully.');

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
  useEffect(() => {
    // setLoading(false);
  }, []);

  const currentLocation = async () => {
    await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });
    Geolocation.getCurrentPosition(async info => {
      setLongitude(info.coords.longitude);
      setLatitude(info.coords.latitude);

      // ShowToast(JSON.stringify(info.coords));
      const url =
        LocationLink +
        info.coords.latitude +
        ',' +
        info.coords.longitude +
        mapsApiKey;
      try {
        // setLoading(true);
        const res = await fetch(url);
        // console.log(res);

        const json = await res.json();
        // console.log(json);
        setLocation(json.results[0]?.formatted_address);
      } catch (e) {
        // setLoading(false);
        ShowToast(e.toString());
      }
    }, console.warn);
  };

  useEffect(() => {
    currentLocation();
  }, []);

  // console.log(focus);
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
        backgroundColor={theme.colors.primary}
        Headertext={'Sign Up'}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => pickImageAndUpload()}
          style={{
            padding: 10,
            borderWidth: 1,
            width: Dimensions.get('window').width / 3.8,
            height: Dimensions.get('window').width / 3.8,
            borderWidth: 2,
            alignSelf: 'center',
            backgroundColor: theme.colors.C4C4C4,
            borderRadius: 120,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: theme.colors.secondary,
            marginTop: 20,
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              width: Dimensions.get('window').width / 4,
              height: Dimensions.get('window').width / 4,
              borderWidth: 3,
              backgroundColor: theme.colors.C4C4C4,
              borderRadius: 120,
              borderColor: theme.colors.primary,
            }}
            source={{uri: uri.uri}}
          />
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            placeholder={'Email Address'}
            Focus_Heading={'Email Address'}
            onFocus={() => setFocus('Focus')}
            onBlur={() => setFocus('lost')}
            find={focus}
            value={email}
            onChangeText={setEmail}
          />
          <View style={{height: 20}} />
          <TextInput
            placeholder={'Password'}
            Focus_Heading={'Password'}
            onFocus={() => setFocus1('Focus')}
            onBlur={() => setFocus1('lost')}
            find={focus1}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={{height: 20}} />
          <TextInput
            placeholder={'Confirm password'}
            Focus_Heading={'Confirm password'}
            onFocus={() => setFocus2('Focus')}
            onBlur={() => setFocus2('lost')}
            find={focus2}
            value={confirm_password}
            onChangeText={setConfirm_password}
            secureTextEntry
          />
          <View style={{height: 20}} />

          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                paddingHorizontal: 20,
                borderRadius: 7,
                marginTop: 10,
                width: Dimensions.get('window').width - 40,
                paddingTop: 10,
                borderWidth: 1,
                borderColor: theme.colors.C4C4C4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <RNPickerSelect
                  // placeholder={{label: 'Select Favourite Sports'}}
                  onValueChange={value => setaccount_type(value)}
                  value={account_type}
                  style={{
                    placeholder: {
                      color: theme.colors.OtherText,
                      fontWeight: '600',
                      fontSize: 16,
                      paddingVertical: 8,
                    },
                    inputIOS: {
                      color: theme.colors.OtherText,
                      fontWeight: '600',
                      fontSize: 16,
                      paddingBottom: 13,
                      paddingTop: 3,
                    },
                    inputAndroid: {
                      color: theme.colors.OtherText,
                      fontWeight: '600',
                      fontSize: 18,
                      paddingVertical: 8,
                    },
                  }}
                  items={[
                    {label: 'Personal', value: 'Personal'},
                    {label: 'Buisness', value: 'Buisness'},
                  ]}

                  // items={category_items.map(item => ({
                  //   label: item.name,
                  //   value: item.id,
                  // }))}
                />
              </View>
              <Image
                style={{resizeMode: 'contain', width: 18, height: 18}}
                source={require('../../assets/Dropdown.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setTerms_and_condition(r => !r)}
            style={{
              borderWidth: 1,
              borderColor: theme.colors.placeholder,
              height: 20,
              width: 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.surface,
            }}>
            {terms_and_condition ? (
              <Icon name="check" size={18} color={theme.colors.secondary} />
            ) : null}
          </TouchableOpacity>
          <TextFormatted
            style={{
              marginLeft: 6,
              color: theme.colors.Black,
              flexShrink: 1,
              fontSize: 10,
            }}>
            I have read and accepted all the{' '}
            <TextFormatted
              onPress={() => navigation.navigate('Terms_Conditions')}
              style={{
                color: theme.colors.secondary,
                fontWeight: '600',
                fontSize: 10,
              }}>
              terms and conditions
            </TextFormatted>
          </TextFormatted>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Button
            onPress={() => Signup()}
            // onPress={() =>
            //   navigation.navigate('HomeNavigator', {
            //     screen: 'Bottomtab',
            //     modal: true,
            //   })
            // }
            buttontext={'Sign Up'}
          />
        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}
