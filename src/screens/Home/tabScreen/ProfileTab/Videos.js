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

export default function Videos() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />

      <View style={{marginTop: 20}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item, index}) => (
            <View style={{alignItems: 'center'}}>
              <Image style={styles.imagebg} source={{uri: item.image}} />
            </View>
          )}
        />
      </View>
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
    borderWidth: 1,
    borderColor: theme.colors.Linear_second,
    // borderRadius: 10,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 2.5,
    borderColor: theme.colors.primary,
    // overflow: 'hidden',
    alignItems: 'center',
  },
});
