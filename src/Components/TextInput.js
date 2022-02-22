import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../Utils/theme';
import TextFormatted from './TextFormated';

export default function CustomTextInput({
  placeholder,
  Heading,
  onChangeText,
  value,
  nulll,
  editable,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  onSubmitEditing,
  Focus_Heading,
  cross,
  opacitytwo,
  searchbar,
  find,
  multiline,
  height,
  onBlur,
  onFocus,
  width,
}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 20,
          borderRadius: 7,
          marginTop: 10,
          opacity: opacitytwo,
          width: width || Dimensions.get('window').width - 40,
          paddingVertical: find == 'Focus' ? 6 : 10,
          // paddingVertical: 6,
          height: height,
          borderWidth: 1,
          borderColor: theme.colors.C4C4C4,
        }}>
        {!!Heading && (
          <TextFormatted style={styles.heading}>{Heading}</TextFormatted>
        )}
        {find == 'Focus' ? (
          <TextFormatted style={styles.heading}>{Focus_Heading}</TextFormatted>
        ) : (
          <View />
        )}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            onFocus={onFocus}
            onBlur={onBlur}
            editable={editable}
            style={[styles.textInput]}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={find == 'Focus' ? '' : placeholder}
            placeholderTextColor={theme.colors.OtherText}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 3,
    color: theme.colors.Black,
    flex: 1,
    // paddingHorizontal: 15,
  },
  heading: {
    fontSize: 9,
    color: theme.colors.Black,
    fontWeight: '700',
  },
  error: {
    color: '#900',
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
  optional: {
    fontSize: 14,
    // marginHorizontal: 30,
    // marginTop: 20,
    color: theme.colors.placeholder,
    fontWeight: '700',
  },
});
