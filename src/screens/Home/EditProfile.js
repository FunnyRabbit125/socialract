import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import Header from '../../Components/Header';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import CustomTextInput from '../../Components/TextInput';
import TextFormatted from '../../Components/TextFormated';
import Button from '../../Components/Button';

export default function EditProfile() {
  const [focus, setFocus] = useState('');
  const [focus1, setFocus1] = useState('');
  const [focus2, setFocus2] = useState('');
  const [account_type, setaccount_type] = useState('Select Favourite Sports');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Edit Profile'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            // paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 40,
          }}>
          <ImageBackground
            style={{
              width: Dimensions.get('window').width / 1.6,
              height: Dimensions.get('window').height / 4,
              borderRadius: 20,
            }}
            imageStyle={{
              width: Dimensions.get('window').width / 1.6,
              height: Dimensions.get('window').height / 4,
              borderRadius: 20,
            }}
            source={{uri: 'https://picsum.photos/500'}}>
            <View style={{position: 'absolute', top: -15, right: -15}}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/plus.png')}
                  style={{width: 50, resizeMode: 'contain', height: 50}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomTextInput
            placeholder={'Username'}
            Focus_Heading={'Username'}
            onFocus={() => setFocus('Focus')}
            onBlur={() => setFocus('lost')}
            find={focus}
          />
          <View style={{height: 20}} />
          <CustomTextInput
            placeholder={'Email'}
            Focus_Heading={'Email'}
            onFocus={() => setFocus1('Focus')}
            onBlur={() => setFocus1('lost')}
            find={focus1}
            secureTextEntry
          />
          <View style={{height: 20}} />
          <CustomTextInput
            placeholder={'Password'}
            Focus_Heading={'Password'}
            onFocus={() => setFocus2('Focus')}
            onBlur={() => setFocus2('lost')}
            find={focus2}
            secureTextEntry
          />
          <View style={{height: 20}} />

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
              // flexDirection: 'row',
              // alignItems: 'center',
            }}>
            {account_type == 'Select account type' ? (
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                      label: 'Select account type',
                      value: 'Select account type',
                    },
                    {label: 'Personal', value: 'Personal'},
                    {label: 'Private', value: 'Private'},
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

        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Button
            onPress={() => navigation.navigate('otpVerify')}
            buttontext={'Save Profile'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
