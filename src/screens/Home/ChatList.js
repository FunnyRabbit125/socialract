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
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import SearchBar from '../../Components/SearchBar';
import _ from 'lodash';
import Header from '../../Components/Header';
import {useNavigation} from '@react-navigation/native';

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

export default function ChatList() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        sourcetwo={require('../../assets/plus_white.png')}
        source={require('../../assets/back_white.png')}
        Headertext={'jacob_w'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          //   style={{backgroundColor: theme.colors.secondary + '1A'}}
          //   horizontal
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{alignItems: 'center', marginBottom: 10}}>
              <SearchBar placeholder={'Search'} />
            </View>
          }
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ChatScreen')}
              style={{
                marginHorizontal: 15,
                marginVertical: 8,
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
                    borderWidth: 1.5,
                    borderColor:
                      item.image == ''
                        ? theme.colors.primary
                        : theme.colors.secondary,
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
                      borderWidth: 2,
                      borderColor: theme.colors.primary,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}
                  />
                </View>
                <View style={{flexShrink: 1}}>
                  <TextFormatted
                    style={{
                      fontSize: 13,
                      fontWeight: '700',
                    }}>
                    Marley Philips
                  </TextFormatted>
                  <TextFormatted
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: theme.colors.OtherText,
                    }}>
                    Have a nice day, bro!
                  </TextFormatted>
                </View>
              </View>

              <TextFormatted
                style={{
                  color: theme.colors.Black,
                  fontSize: 13,
                  flexShrink: 1,
                }}>
                · now
              </TextFormatted>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{alignItems: 'center', paddingBottom: 30, paddingTop: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('../../assets/camera_green.png')}
          />
          <TextFormatted
            style={{fontWeight: 'bold', color: theme.colors.secondary}}>
            Camera
          </TextFormatted>
        </View>
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
