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
import {theme} from '../../../Utils/theme';
import Statusbar from '../../../Components/Statusbar';
import TextFormatted from '../../../Components/TextFormated';

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

export default function Home() {
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
        }}>
        <TextFormatted
          style={{
            fontSize: 24,
            fontWeight: '800',
            color: theme.colors.secondary,
            // borderWidth: 1,
            width: 200,
            marginRight: 20,
          }}>
          Socialract
        </TextFormatted>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width,
            flexShrink: 1,
          }}>
          <Image
            style={{height: 30, width: 30, resizeMode: 'contain'}}
            source={require('../../../assets/Live.png')}
          />
          <Image
            style={{height: 25, width: 25, resizeMode: 'contain'}}
            source={require('../../../assets/Wallet.png')}
          />
          <Image
            style={{height: 25, width: 25, resizeMode: 'contain'}}
            source={require('../../../assets/Search.png')}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          style={{backgroundColor: theme.colors.secondary + '1A'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          ListHeaderComponent={
            <View style={{alignItems: 'center'}}>
              <ImageBackground
                // onPress={() => navigation.navigate('BrowseEvent', item.id)}
                style={styles.myimagebg}
                imageStyle={styles.myimagestyle}
                source={{uri: 'https://picsum.photos/500'}}>
                <View style={{position: 'absolute', bottom: -10}}>
                  <Image
                    source={require('../../../assets/add_live.png')}
                    style={{width: 35, resizeMode: 'contain', height: 35}}
                  />
                </View>
              </ImageBackground>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  fontWeight: '700',
                  width: 100,
                  //   borderWidth: 1,
                  marginVertical: 5,
                }}>
                Add Yours
              </Text>
            </View>
          }
          renderItem={({item, index}) => (
            <View style={{alignItems: 'center'}}>
              <ImageBackground
                // onPress={() => navigation.navigate('BrowseEvent', item.id)}
                style={styles.imagebg}
                imageStyle={styles.imagestyle}
                source={{uri: item.image}}>
                <View style={{position: 'absolute', bottom: -15}}>
                  <Image
                    source={require('../../../assets/Live_icon.png')}
                    style={{width: 35, resizeMode: 'contain', height: 35}}
                  />
                </View>
              </ImageBackground>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  fontWeight: '700',
                  width: 100,
                  //   borderWidth: 1,
                  marginVertical: 5,
                }}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
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
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 13,
                marginVertical: 15,
              }}>
              <View
                style={{
                  backgroundColor: theme.colors.secondary + '1A',
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                }}>
                <ImageBackground
                  style={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 5,
                    borderRadius: 20,
                  }}
                  imageStyle={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 5,
                    borderRadius: 10,
                  }}
                  source={{uri: 'https://picsum.photos/500'}}>
                  <View style={{position: 'absolute', top: -15, left: -15}}>
                    <Image
                      source={require('../../../assets/More_.png')}
                      style={{width: 50, resizeMode: 'contain', height: 50}}
                    />
                  </View>
                </ImageBackground>
                <View style={{width: 270}}>
                  <TextFormatted
                    style={{
                      fontSize: 10,
                      marginVertical: 10,
                      lineHeight: 23,
                    }}>
                    <TextFormatted
                      style={{
                        fontSize: 10,
                        marginVertical: 10,
                        color: theme.colors.Black,
                        fontWeight: '600',
                      }}>
                      joshua_l{' '}
                    </TextFormatted>
                    The game in Japan was amazing and I want to share some
                    photos...
                    <TextFormatted
                      style={{
                        fontSize: 10,
                        marginVertical: 10,
                        color: theme.colors.secondary,
                        fontWeight: '600',
                        textDecorationLine: 'underline',
                      }}>
                      See More
                    </TextFormatted>
                  </TextFormatted>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: Dimensions.get('window').height / 4,
                }}>
                <ImageBackground
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 50,
                  }}
                  imageStyle={{
                    height: 45,
                    width: 45,
                    resizeMode: 'contain',
                    borderRadius: 50,
                  }}
                  source={{uri: 'https://picsum.photos/500'}}>
                  <View style={{position: 'absolute', right: 0, top: -5}}>
                    <Image
                      style={{height: 15, width: 15, resizeMode: 'contain'}}
                      source={require('../../../assets/tick.png')}
                    />
                  </View>
                </ImageBackground>

                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 23,
                      width: 23,
                      resizeMode: 'contain',
                      marginBottom: 5,
                    }}
                    source={require('../../../assets/Red_heart.png')}
                  />
                  <TextFormatted style={{fontSize: 12, fontWeight: '600'}}>
                    23
                  </TextFormatted>
                </View>

                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 23,
                      width: 23,
                      resizeMode: 'contain',
                      marginBottom: 5,
                    }}
                    source={require('../../../assets/Comments.png')}
                  />
                  <TextFormatted style={{fontSize: 12, fontWeight: '600'}}>
                    23
                  </TextFormatted>
                </View>

                <Image
                  style={{
                    height: 29,
                    width: 29,
                    resizeMode: 'contain',
                    marginBottom: 5,
                  }}
                  source={require('../../../assets/Donate.png')}
                />
              </View>
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
});