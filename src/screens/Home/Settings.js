import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import Statusbar from '../../Components/Statusbar';
import SearchBar from '../../Components/SearchBar';
import {theme} from '../../Utils/theme';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../Components/TextFormated';
import SettingOptions from '../../Components/SettingOptions';

export default function Settings() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(1);
  const [like_count, setLike_count] = useState(false);
  const [follow_count, setFollow_count] = useState(false);
  const [private_account, setPrivate_account] = useState(false);
  const [Recipient, setRecipient] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [Dark_theme, setsetDark_theme] = useState(false);
  const [home_menu, setHome_menu] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Settings'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <SearchBar placeholder={'Search'} />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <TextFormatted style={{fontWeight: '700'}}>
            Account Type
          </TextFormatted>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              style={{
                height: 22,
                width: 22,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={
                selected != 1
                  ? require('../../assets/Radio_Off.png')
                  : require('../../assets/Radio_On.png')
              }
            />
            <TextFormatted
              style={{
                color:
                  selected == 1
                    ? theme.colors.secondary
                    : theme.colors.OtherText,
                fontWeight: selected == 1 ? '700' : '500',
              }}>
              Personal Account
            </TextFormatted>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              style={{
                height: 22,
                width: 22,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={
                selected != 2
                  ? require('../../assets/Radio_Off.png')
                  : require('../../assets/Radio_On.png')
              }
            />
            <TextFormatted
              style={{
                color:
                  selected == 2
                    ? theme.colors.secondary
                    : theme.colors.OtherText,
                fontWeight: selected == 1 ? '700' : '500',
              }}>
              Business Account
            </TextFormatted>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 20}}>
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.Black,
              marginTop: 30,
            }}>
            Privacy Options
          </TextFormatted>

          <SettingOptions
            setSelected={setLike_count}
            switchh
            selected={like_count}
            text={'Like Count'}
          />
          <SettingOptions
            setSelected={setFollow_count}
            switchh
            selected={follow_count}
            text={'Followers Count'}
          />
          <SettingOptions
            setSelected={setPrivate_account}
            switchh
            selected={private_account}
            text={'Private Account'}
          />
          <SettingOptions
            setSelected={setRecipient}
            switchh
            selected={Recipient}
            text={'Read Recipient'}
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.Black,
              marginTop: 30,
            }}>
            Security Options
          </TextFormatted>

          <SettingOptions image text={'Change password'} />
          <SettingOptions image text={'Logo Activities'} />
          <SettingOptions
            setSelected={setVpn}
            switchh
            selected={vpn}
            text={'VPN'}
          />
          <SettingOptions
            setSelected={setBiometric}
            switchh
            selected={biometric}
            text={'Biometrics'}
          />
        </View>

        <View style={{marginHorizontal: 20, marginBottom: 40}}>
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.Black,
              marginTop: 30,
            }}>
            Theme
          </TextFormatted>

          <SettingOptions
            setSelected={setsetDark_theme}
            switchh
            selected={Dark_theme}
            text={'Dark Mode'}
          />
          <SettingOptions
            color={theme.colors.Black}
            fontWeight={'800'}
            image
            text={'Privacy Policy'}
          />
          <SettingOptions
            color={theme.colors.Black}
            fontWeight={'800'}
            image
            text={'Terms and Conditions'}
          />
          <SettingOptions
            color={theme.colors.Black}
            fontWeight={'800'}
            image
            text={'Help'}
          />
          <SettingOptions
            color={theme.colors.Black}
            fontWeight={'800'}
            image
            text={'Payment Method(s)'}
          />
          <SettingOptions
            color={theme.colors.Black}
            fontWeight={'800'}
            setSelected={setHome_menu}
            switchh
            selected={home_menu}
            text={'Home screen Menu'}
          />

          <SettingOptions
            color={theme.colors.Get_Verified}
            fontWeight={'800'}
            text={'Get Verified'}
          />
          <SettingOptions
            color={theme.colors.red}
            fontWeight={'800'}
            text={'Logout'}
          />
          <SettingOptions
            color={theme.colors.red}
            fontWeight={'800'}
            text={'Delete Account'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
