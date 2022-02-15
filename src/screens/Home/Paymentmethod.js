import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Statusbar from '../../Components/Statusbar';
import {theme} from '../../Utils/theme';
import Header from '../../Components/Header';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../Components/TextFormated';

export default function Paymentmethod() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Payment Method(s)'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cards')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.secondary + '1A',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Image
            style={{
              height: 29,
              width: 29,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('../../assets/Card.png')}
          />
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.payment_Text,
            }}>
            Credit Card Or Debit
          </TextFormatted>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: theme.colors.secondary + '1A',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <Image
            style={{
              height: 29,
              width: 29,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('../../assets/Paypal.png')}
          />
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.payment_Text,
            }}>
            Paypal
          </TextFormatted>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: theme.colors.secondary + '1A',
            paddingVertical: 10,
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
          <Image
            style={{
              height: 29,
              width: 29,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('../../assets/Bank.png')}
          />
          <TextFormatted
            style={{
              fontWeight: '700',
              color: theme.colors.payment_Text,
            }}>
            Bank Transfer
          </TextFormatted>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
