import {View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import React from 'react';
import TextFormatted from './TextFormated';
import {theme} from '../Utils/theme';

export default function SettingOptions({
  setSelected,
  switchh,
  selected,
  image,
  text,
  fontWeight,
  color,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <TextFormatted
          style={{
            color: color || theme.colors.OtherText,
            fontWeight: fontWeight || '500',
          }}>
          {text}
        </TextFormatted>
        {!!switchh && (
          <Switch
            trackColor={{
              false: theme.colors.C4C4C4,
              true: theme.colors.secondary,
            }}
            thumbColor="white"
            ios_backgroundColor={theme.colors.searchbar_text}
            onValueChange={value => setSelected(value)}
            value={selected}
          />
        )}

        {!!image && (
          <Image
            style={{
              height: 18,
              width: 18,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('../assets/Right.png')}
          />
        )}
      </View>
    </View>
  );
}
