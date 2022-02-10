import {View, Text} from 'react-native';
import React from 'react';
import {theme} from '../../../Utils/theme';

export default function Post() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Text>Post</Text>
    </View>
  );
}
