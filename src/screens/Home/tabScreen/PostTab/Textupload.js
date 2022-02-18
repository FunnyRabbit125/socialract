import {View, Text, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../../../Components/Statusbar';
import {theme} from '../../../../Utils/theme';
import Header from '../../../../Components/Header';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../../../Components/TextFormated';
import SettingOptions from '../../../../Components/SettingOptions';
import Button from '../../../../Components/Button';

export default function Textupload() {
  const navigation = useNavigation();
  const [like_count, setLike_count] = useState(0);
  const [comment, setComment] = useState(0);
  const [donation, setDonation] = useState(0);
  const [donation_count, setDonation_count] = useState(0);
  const [donation_users, setDonation_users] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: theme.colors.secondary,
          paddingVertical: 13,
          alignItems: 'center',
        }}>
        <TextFormatted
          style={{
            fontSize: 16,
            color: theme.colors.primary,
          }}>
          Cancel
        </TextFormatted>
        <TextFormatted
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: theme.colors.primary,
          }}>
          Next
        </TextFormatted>
      </View>

      <ScrollView>
        <View
          style={{
            borderWidth: 2,
            height: 170,
            marginHorizontal: 20,
            borderRadius: 20,
            borderColor: theme.colors.C4C4C4,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 40,
            marginBottom: 20,
          }}>
          <TextInput
            style={{fontSize: 17, color: theme.colors.Black, fontWeight: '600'}}
            placeholderTextColor={theme.colors.placeholder}
            placeholder="What’s on your mind?"
            multiline={true}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <SettingOptions
            setSelected={setLike_count}
            switchh
            selected={like_count}
            text={'Like Count'}
            fontSize={16}
            color={theme.colors.Black}
            fontWeight={'600'}
          />
          <SettingOptions
            setSelected={setComment}
            switchh
            selected={comment}
            text={'Comment Icon'}
            fontSize={16}
            color={theme.colors.Black}
            fontWeight={'600'}
          />
          <SettingOptions
            setSelected={setDonation}
            switchh
            selected={donation}
            fontSize={16}
            text={'Donation Icon'}
            color={theme.colors.Black}
            fontWeight={'600'}
          />
          <SettingOptions
            setSelected={setDonation_count}
            switchh
            selected={donation_count}
            text={'Donation Count'}
            fontSize={16}
            color={theme.colors.Black}
            fontWeight={'600'}
          />
          <SettingOptions
            setSelected={setDonation_users}
            switchh
            selected={donation_users}
            text={'Donation Users'}
            fontSize={16}
            color={theme.colors.Black}
            fontWeight={'600'}
          />
          <View style={{height: 30}} />
          <Button buttontext={'Add Post'} />
        </View>
      </ScrollView>
    </View>
  );
}
