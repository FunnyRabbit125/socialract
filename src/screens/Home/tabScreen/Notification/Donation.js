import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {theme} from '../../../../Utils/theme';
import Statusbar from '../../../../Components/Statusbar';
import TextFormatted from '../../../../Components/TextFormated';
import _ from 'lodash';

const EVENTS_FOLLOWED = [
  {
    name: 'Online Courses',
    dateTime: new Date().toJSON(),
    image: 'https://picsum.photos/500',
    key: '1',
  },
  {
    name: 'Workshops',
    dateTime: new Date().toJSON(),
    image: '',
    key: '2',
  },
  {
    name: 'Music Concert',
    dateTime: new Date().toJSON(),
    image: 'https://picsum.photos/500',
    key: '3',
  },
  {
    name: 'Yoga',
    dateTime: new Date().toJSON(),
    image: '',
    key: '4',
  },
  {
    name: 'Online Courses',
    dateTime: new Date().toJSON(),
    image: 'https://picsum.photos/500',
    key: '1',
  },
  {
    name: 'Workshops',
    dateTime: new Date().toJSON(),
    image: '',
    key: '2',
  },
  {
    name: 'Music Concert',
    dateTime: new Date().toJSON(),
    image: '',
    key: '3',
  },
  {
    name: 'Yoga',
    dateTime: new Date().toJSON(),
    image: 'xcfv',
    key: '4',
  },
  {
    name: 'Yoga',
    dateTime: new Date().toJSON(),
    image: 'xcfv',
    key: '4',
  },
];

export default function Donation() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <View style={{flex: 1}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          //   style={{backgroundColor: theme.colors.secondary + '1A'}}
          //   horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item, index}) => (
            <View
              style={{
                marginHorizontal: 15,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  // backgroundColor: theme.colors.secondary + '1A',
                  borderRadius: 10,
                  flexDirection: 'row',
                  flexShrink: 1,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: theme.colors.C4C4C4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 55,
                    height: 55,
                    borderRadius: 30,
                    marginRight: 8,
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      borderWidth: 1,
                      borderColor: theme.colors.primary,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}
                  />
                </View>
                <View style={{flexShrink: 1}}>
                  <TextFormatted
                    style={{
                      fontSize: 13,
                      marginVertical: 10,
                      lineHeight: 23,
                      color: theme.colors.Black,
                      fontWeight: '700',
                    }}>
                    Marley Philips
                  </TextFormatted>
                </View>
              </View>
              <View style={{alignItems: 'flex-start', flexShrink: 1}}>
                <TextFormatted
                  style={{
                    color: theme.colors.Black,
                    fontSize: 13,
                  }}>
                  $40.00
                </TextFormatted>
                <TextFormatted
                  style={{color: theme.colors.OtherText, fontSize: 13}}>
                  · now
                </TextFormatted>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagebg: {
    // borderWidth: 2,
    borderColor: theme.colors.Linear_second,
    // borderRadius: 10,
    width: 40,
    height: 40,
    // borderColor: theme.colors.primary,
    // overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 3,
  },
});
