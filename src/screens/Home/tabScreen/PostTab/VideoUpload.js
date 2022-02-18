import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../../../../Utils/theme';
import TextFormatted from '../../../../Components/TextFormated';
import Statusbar from '../../../../Components/Statusbar';
import {launchImageLibrary} from 'react-native-image-picker';

export default function VideoUpload() {
  const [uri, setUri] = useState('');

  const pickImageAndUpload = () => {
    launchImageLibrary({quality: 0.5}, fileobj => {
      if (!fileobj.didCancel) setUri(fileobj.assets[0]);
    });
  };

  useEffect(() => {
    pickImageAndUpload();
  }, []);

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
        <TextFormatted style={{fontSize: 16, color: theme.colors.primary}}>
          Cancel
        </TextFormatted>
        <TextFormatted style={{fontSize: 16, color: theme.colors.primary}}>
          Recents
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

      <Image
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          resizeMode: 'cover',
        }}
        source={{uri: uri?.uri}}
      />
    </View>
  );
}
