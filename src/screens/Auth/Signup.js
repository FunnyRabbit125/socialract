import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform,
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
import RNPickerSelect from 'react-native-picker-select';
import {Checkbox} from 'react-native-paper';

export default function Signup() {
  const [focus, setFocus] = useState('');
  const [focus1, setFocus1] = useState('');
  const [focus2, setFocus2] = useState('');
  const [account_type, setaccount_type] = useState('Select Favourite Sports');
  const navigation = useNavigation();
  const [terms_and_condition, setTerms_and_condition] = useState(0);

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
        backgroundColor={theme.colors.primary}
        Headertext={'Sign Up'}
      />

      <ScrollView>
        <View
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
              alignSelf: 'center',
              backgroundColor: theme.colors.C4C4C4,
              borderRadius: 120,
              borderColor: theme.colors.primary,
            }}
            source={{uri: 'https://picsum.photos/500'}}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            placeholder={'Email Address'}
            Focus_Heading={'Email Address'}
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
            secureTextEntry
          />
          <View style={{height: 20}} />
          <TextInput
            placeholder={'Confirm password'}
            Focus_Heading={'Confirm password'}
            onFocus={() => setFocus2('Focus')}
            onBlur={() => setFocus2('lost')}
            find={focus2}
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
              {account_type == 'Select Favourite Sports' ? (
                <View />
              ) : (
                <TextFormatted
                  style={{
                    fontSize: 9,
                    color: theme.colors.Black,
                    fontWeight: '700',
                  }}>
                  Account Type
                </TextFormatted>
              )}

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
                    {
                      label: 'Select Favourite Sports',
                      value: 'Select Favourite Sports',
                    },
                    {label: 'Personal', value: 'Personal'},
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
            marginTop: 20,
            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
          }}>
          <Checkbox
            tintColors={{
              true: theme.colors.secondary,
              false: theme.colors.placeholder,
            }}
            boxType={'square'}
            onCheckColor={theme.colors.secondary}
            onFillColor={theme.colors.secondary}
            onTintColor={theme.colors.secondary}
            onAnimationType="stroke"
            offAnimationType="stroke"
            disabled={false}
            value={terms_and_condition}
            onValueChange={newValue => setTerms_and_condition(newValue)}
          />
          <TextFormatted
            style={{
              marginLeft: 10,
              color: theme.colors.Black,
              flexShrink: 1,
            }}>
            I have read and accepted all the{'  '}
            <TextFormatted
              onPress={() => navigation.navigate('Terms_Conditions')}
              style={{color: theme.colors.secondary, fontWeight: '600'}}>
              terms and conditions
            </TextFormatted>
          </TextFormatted>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Button
            onPress={() => navigation.navigate('otpVerify')}
            buttontext={'Sign Up'}
          />
        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}
