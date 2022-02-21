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
import React, {useState} from 'react';
import {theme} from '../../../Utils/theme';
import Statusbar from '../../../Components/Statusbar';
import TextFormatted from '../../../Components/TextFormated';

import Photos from './ProfileTab/Photos';
import Videos from './ProfileTab/Videos';
import Text_ from './ProfileTab/Text';
import {useNavigation, useRoute} from '@react-navigation/native';

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
    image: 'https://picsum.photos/500',
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
    image: 'https://picsum.photos/500',
    key: '4',
  },
];

export default function Profile() {
  const [currentPage, setCurrentPage] = useState('');
  const navigation = useNavigation();
  const {params} = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          // borderWidth: 1,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 160,
          }}>
          {/* <Image
            style={{
              height: 50,
              width: 50,
              resizeMode: 'cover',
              borderRadius: 150,
            }}
            source={{uri: 'https://picsum.photos/500'}}
          /> */}
          <TextFormatted
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: theme.colors.Black,
              // flexShrink: 1,
              marginHorizontal: 5,
            }}>
            Jacob West
          </TextFormatted>
          <Image
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
            }}
            source={require('../../../assets/tick.png')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width / 3.5,
            flexShrink: 1,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
              style={{height: 22, width: 22, resizeMode: 'contain'}}
              source={require('../../../assets/Edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
            <Image
              style={{height: 22, width: 22, resizeMode: 'contain'}}
              source={require('../../../assets/Analytics.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image
              style={{height: 22, width: 22, resizeMode: 'contain'}}
              source={require('../../../assets/Settings.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          marginHorizontal: 8,
          marginVertical: 15,
        }}>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            // paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 20,
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
                  source={require('../../../assets/plus.png')}
                  style={{width: 50, resizeMode: 'contain', height: 50}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: Dimensions.get('window').height / 4.5,
            // borderWidth: 1,
          }}>
          <View style={{alignItems: 'flex-start'}}>
            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 16,
                fontWeight: '600',
              }}>
              54
            </TextFormatted>

            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 13,
                fontWeight: '400',
              }}>
              Posts
            </TextFormatted>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 16,
                fontWeight: '600',
              }}>
              154
            </TextFormatted>

            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 13,
                fontWeight: '400',
              }}>
              Followers
            </TextFormatted>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 16,
                fontWeight: '600',
              }}>
              231
            </TextFormatted>

            <TextFormatted
              style={{
                color: theme.colors.Black,
                fontSize: 13,
                fontWeight: '400',
              }}>
              Following
            </TextFormatted>
          </View>
        </View>
      </View>

      <View style={{marginVertical: 20, marginHorizontal: 20}}>
        <TextFormatted
          style={{color: theme.colors.Black, fontSize: 20, fontWeight: '700'}}>
          Jacob West
        </TextFormatted>
        <TextFormatted
          style={{
            fontSize: 12,
            fontWeight: '400',
            width: Dimensions.get('window').width / 1.5,
            marginTop: 10,
            color: theme.colors.Black,
          }}>
          Digital goodies designer
          <TextFormatted
            style={{
              fontSize: 12,
              fontWeight: '600',
              width: Dimensions.get('window').width / 1.5,
              marginTop: 10,
              color: theme.colors.secondary,
            }}>
            @pixsellz{' '}
          </TextFormatted>
          <TextFormatted
            style={{
              fontSize: 12,
              fontWeight: '400',
              width: Dimensions.get('window').width / 1.5,
              marginTop: 10,
              color: theme.colors.Black,
            }}>
            Everything is designed.
          </TextFormatted>
        </TextFormatted>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.colors.primary,
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(0)}
          style={[
            styles.tabStyle,
            {
              backgroundColor:
                currentPage == 0
                  ? theme.colors.secondary
                  : theme.colors.primary,
            },
          ]}>
          <TextFormatted
            style={{
              color:
                currentPage == 0
                  ? theme.colors.primary
                  : theme.colors.OtherText,
              fontWeight: '700',
            }}>
            Photos
          </TextFormatted>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage(1)}
          style={[
            styles.tabStyle,
            {
              backgroundColor:
                currentPage == 1
                  ? theme.colors.secondary
                  : theme.colors.primary,
            },
          ]}>
          <TextFormatted
            style={{
              color:
                currentPage == 1
                  ? theme.colors.primary
                  : theme.colors.OtherText,
              fontWeight: '700',
            }}>
            Videos
          </TextFormatted>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(2)}
          style={[
            styles.tabStyle,
            {
              backgroundColor:
                currentPage == 2
                  ? theme.colors.secondary
                  : theme.colors.primary,
            },
          ]}>
          <TextFormatted
            style={{
              color:
                currentPage == 2
                  ? theme.colors.primary
                  : theme.colors.OtherText,
              fontWeight: '700',
            }}>
            Text
          </TextFormatted>
        </TouchableOpacity>
      </View>

      {currentPage == 0 ? (
        <Photos navigation={navigation} />
      ) : currentPage == 1 ? (
        <Videos navigation={navigation} />
      ) : (
        <Text_ navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: '700',
    width: '60%',
    color: theme.colors.Black,
  },
  header_image: {
    height: 33,
    width: 33,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    width: '80%',
    color: theme.colors.Black,
  },
  ViewAll: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.Linear_second,
    textDecorationLine: 'underline',
  },
  graph_image: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 1,
    resizeMode: 'cover',
  },
  imagebg: {
    borderWidth: 2,
    borderColor: theme.colors.Linear_second,
    borderRadius: 10,
    width: Dimensions.get('window').width / 5.7,
    height: Dimensions.get('window').width / 5.7,
    borderColor: theme.colors.secondary,
    // overflow: 'hidden',
    alignItems: 'center',
  },
  imagestyle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colors.primary,
    resizeMode: 'cover',
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').width / 6,
  },
  myimagebg: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 5.7,
    height: Dimensions.get('window').width / 5.7,
    alignItems: 'center',
  },
  myimagestyle: {
    borderRadius: 10,
    resizeMode: 'cover',
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').width / 6,
  },
  tabStyle: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
