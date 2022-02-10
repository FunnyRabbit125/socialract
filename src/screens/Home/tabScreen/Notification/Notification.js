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
import _ from 'lodash';

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

export default function Notification() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />

      <View style={{flex: 1}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          //   style={{backgroundColor: theme.colors.secondary + '1A'}}
          //   horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item, index}) => (
            <View
              style={{
                marginHorizontal: 13,
                marginVertical: 5,
              }}>
              <View>
                <View
                  style={{
                    // backgroundColor: theme.colors.secondary + '1A',
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      marginRight: 8,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}
                  />
                  <View style={{flexShrink: 1}}>
                    <TextFormatted
                      style={{
                        fontSize: 13,
                        marginVertical: 10,
                        lineHeight: 23,
                      }}>
                      karennne liked 3 posts.
                      <TextFormatted style={{color: theme.colors.OtherText}}>
                        {' '}
                        3h
                      </TextFormatted>
                    </TextFormatted>
                  </View>
                </View>
                {item.image == '' ? (
                  <View />
                ) : (
                  <View style={{marginLeft: 70, marginRight: 18}}>
                    <FlatList
                      style={{}}
                      data={Array(_.random(2, 10)).fill('')}
                      // horizontal
                      showsVerticalScrollIndicator={false}
                      numColumns={6}
                      contentContainerStyle={{paddingVertical: 10}}
                      renderItem={({item, index}) => (
                        <View style={{alignItems: 'center'}}>
                          <Image
                            style={[
                              styles.imagebg,
                              {marginTop: index > 5 ? 5 : 0},
                            ]}
                            source={{uri: 'https://picsum.photos/500'}}
                          />
                        </View>
                      )}
                    />
                  </View>
                )}
              </View>
            </View>
          )}
        />
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
