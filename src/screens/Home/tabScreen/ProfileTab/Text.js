import {View, Text} from 'react-native';
import React from 'react';
import TextFormatted from '../../../../Components/TextFormated';
import {theme} from '../../../../Utils/theme';

export default function Text_text() {
  return (
    <View>
      <TextFormatted
        style={{
          fontSize: 18,
          fontWeight: '700',
          marginHorizontal: 90,
          textAlign: 'center',
          marginTop: 50,
          color: theme.colors.placeholder,
        }}>
        Please follow this user to view their posts
      </TextFormatted>
    </View>
  );
}
