import React, {useState} from 'react';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';

import Textupload from './tabScreen/PostTab/Textupload';
import PhotoUpload from './tabScreen/PostTab/PhotoUpload';
import VideoUpload from './tabScreen/PostTab/VideoUpload';
import TextFormatted from '../../Components/TextFormated';
import {theme} from '../../Utils/theme';

export default function TabScreen({navigation, navigate}) {
  const [currentPage, setCurrentPage] = useState(0);
  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />

      {currentPage == 0 ? (
        <Textupload navigation={navigation} />
      ) : currentPage == 1 ? (
        <PhotoUpload navigation={navigation} navigate={navigate} />
      ) : (
        <VideoUpload navigation={navigation} />
      )}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          paddingVertical: 25,
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
            width: '33%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextFormatted
            style={{
              fontWeight: currentPage == 0 ? '700' : '400',
              color:
                currentPage == 0 ? theme.colors.secondary : theme.colors.Black,
            }}>
            Text
          </TextFormatted>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage(1)}
          style={{
            width: '33%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextFormatted
            style={{
              fontWeight: currentPage == 1 ? '700' : '400',
              color:
                currentPage == 1 ? theme.colors.secondary : theme.colors.Black,
            }}>
            Photo
          </TextFormatted>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(2)}
          style={{
            width: '33%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextFormatted
            style={{
              fontWeight: currentPage == 2 ? '700' : '400',
              color:
                currentPage == 2 ? theme.colors.secondary : theme.colors.Black,
            }}>
            Video
          </TextFormatted>
        </TouchableOpacity>
      </View>
    </View>
  );
}
