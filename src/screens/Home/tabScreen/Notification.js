import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../Utils/theme';
import Header from '../../../Components/Header';
import Statusbar from '../../../Components/Statusbar';
import {useNavigation} from '@react-navigation/native';
import Donation from './Notification/Donation';
import Notification_ from './Notification/Notification';
import TextFormatted from '../../../Components/TextFormated';

export default function Notification() {
  const [currentPage, setCurrentPage] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.colors.primary,
        }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(0)}
          style={{
            width: Dimensions.get('window').width / 2,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.secondary,
          }}>
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontWeight: currentPage == 0 ? '900' : '600',
              fontSize: 16,
            }}>
            Notifications
          </TextFormatted>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage(1)}
          style={{
            width: Dimensions.get('window').width / 2,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.secondary,
          }}>
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontWeight: currentPage == 1 ? '900' : '600',
              fontSize: 16,
            }}>
            Donations
          </TextFormatted>
        </TouchableOpacity>
      </View>

      {currentPage == 0 ? (
        <Notification_ navigation={navigation} />
      ) : (
        <Donation navigation={navigation} />
      )}
    </View>
  );
}
