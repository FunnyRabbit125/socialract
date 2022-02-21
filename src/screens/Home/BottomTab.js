import React, {useState} from 'react';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import Home from './tabScreen/Home';
import Explore from './tabScreen/Explore';
import Post from './tabScreen/Post';
import PostBottomTab from '../Home/PostBottomTab';
import Notification from './tabScreen/Notification';
import Profile from './tabScreen/Profile';
import {theme} from '../../Utils/theme';

export default function TabScreen({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);
  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />

      {currentPage == 0 ? (
        <Home navigation={navigation} />
      ) : currentPage == 1 ? (
        <Explore navigation={navigation} />
      ) : currentPage == 2 ? (
        <PostBottomTab navigation={navigation} />
      ) : currentPage == 3 ? (
        <Notification navigation={navigation} />
      ) : (
        <Profile navigation={navigation} />
      )}
      <View
        style={{
          // height: 100,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          backgroundColor: '#fff',

          paddingBottom: 30,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 6.65,

          elevation: 16,
        }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(0)}
          style={{
            width: '20%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
            }}
            source={
              currentPage == 0
                ? require('../../assets/Home_Active.png')
                : require('../../assets/Home_inactive.png')
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage(1)}
          style={{
            width: '20%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginTop: 5,
              resizeMode: 'contain',
            }}
            // source={require('../../../assets/My_Bookings.png')}
            source={
              currentPage == 1
                ? require('../../assets/search_active.png')
                : require('../../assets/Search_gray_bottom.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(2)}
          style={{
            width: '20%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginTop: 5,
              resizeMode: 'contain',
            }}
            source={
              currentPage == 2
                ? require('../../assets/Create.png')
                : require('../../assets/Create_inactive.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(3)}
          style={{
            width: '20%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginTop: 5,
              resizeMode: 'contain',
            }}
            source={
              currentPage == 3
                ? require('../../assets/Notifications_Active.png')
                : require('../../assets/Notifications_inactive.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(4)}
          style={{
            width: '20%',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <Image
            style={{
              height: 38,
              width: 38,
              marginTop: 5,
              resizeMode: 'cover',
              borderRadius: 50,
              borderWidth: 2,
              borderColor:
                currentPage == 4
                  ? theme.colors.secondary
                  : theme.colors.primary,
            }}
            source={{uri: 'https://picsum.photos/500'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
