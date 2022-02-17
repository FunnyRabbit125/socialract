import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import LiveMsgSendBar from '../../Components/LiveMsgSendBar';
import {theme} from '../../Utils/theme';

const CHATS_DATA = [
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'Hellow',
    isOwn: true,
    messageId: '1',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message:
      'I am Finevodfbvdfgbfbfgbnkjngdfghghdkfhhdfjkhfkhfdhjkdkdfjkdfkfjkdfdjkdfkvdfjkdfjkjkfkddkkldjkdjkghdjk',
    isOwn: true,
    messageId: '3',
  },
].reverse();

export default function SeeLive({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        // backgroundColor={theme.colors.secondary}
        // barStyle="light-content"
        hidden={true}
      />
      <View style={{height: 30}} />
      <Video
        source={{
          uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
          headers: {
            Authorization: 'bearer some-token-value',
            'X-Custom-Header': 'some value',
          },
        }}
        fullscreen
        resizeMode="cover"
        ref={ref => {
          player = ref;
        }}
        style={styles.backgroundVideo}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 40,
              width: 40,
              resizeMode: 'cover',
              marginRight: 10,
              borderRadius: 30,
            }}
            source={{uri: 'https://picsum.photos/500'}}
          />
          <TextFormatted
            style={{fontWeight: '700', color: theme.colors.primary}}>
            maxjacobson
          </TextFormatted>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
            source={require('../../assets/Live_screen.png')}
          />
          <View style={{width: 17}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 4,
              paddingHorizontal: 8,
              backgroundColor: theme.colors.Black + '4D',
              borderRadius: 4,
            }}>
            <Image
              style={{
                height: 12,
                width: 12,
                resizeMode: 'contain',
                marginRight: 5,
              }}
              source={require('../../assets/eye_icon.png')}
            />
            <TextFormatted
              style={{fontWeight: '700', color: theme.colors.primary}}>
              2
            </TextFormatted>
          </View>
          <View style={{width: 12}} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={require('../../assets/cancel_white.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 150,
          position: 'absolute',
          bottom: 120,
          marginHorizontal: 20,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CHATS_DATA}
          inverted
          ListHeaderComponent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('window').width - 40,
                alignItems: 'stretch',
                overflow: 'hidden',
                borderRadius: 100,
              }}>
              <View
                style={{
                  backgroundColor: theme.colors.secondary,
                  flexGrow: 1,
                  paddingLeft: 10,
                  flexShrink: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <View style={{height: 35, width: 35, borderRadius: 50}}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      resizeMode: 'cover',
                      borderRadius: 50,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}
                  />
                </View>
                <TextFormatted
                  numberOfLines={2}
                  style={{
                    fontWeight: '600',
                    color: theme.colors.primary,
                    marginLeft: 10,
                    // width: 200,
                    flexShrink: 1,
                    flexGrow: 1,
                    fontSize: 11,
                  }}>
                  Send a request to be in maxjacobson's live video.
                </TextFormatted>
              </View>
              <View style={{width: 2.5}} />
              <View
                style={{
                  backgroundColor: theme.colors.secondary,
                  borderTopRightRadius: 20,
                  // width: 100,
                  // marginLeft: 10,
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TextFormatted
                    style={{
                      fontWeight: '700',
                      color: theme.colors.primary,
                      marginLeft: 10,
                      fontSize: 11,
                      // width: 200,
                    }}>
                    Request
                  </TextFormatted>
                </View>
              </View>
            </View>
          }
          renderItem={({item}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                    height: 35,
                    width: 35,
                    borderRadius: 50,
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      resizeMode: 'cover',
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: theme.colors.secondary,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}
                  />
                </View>
                <TextFormatted
                  style={{
                    fontWeight: '700',
                    color: theme.colors.primary,
                    marginLeft: 10,
                  }}>
                  karennne joined
                </TextFormatted>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          paddingVertical: 15,
          backgroundColor: theme.colors.primary,
          width: Dimensions.get('window').width,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <LiveMsgSendBar placeholder={'Comment'} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
            }}
            source={require('../../assets/Donate.png')}
          />
          <View style={{width: 17}} />

          <Image
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../../assets/Messanger_send.png')}
          />

          <View style={{width: 17}} />

          <Image
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../../assets/Red_heart.png')}
          />
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

// import {View, Text} from 'react-native';
// import React from 'react';
// import {theme} from '../../Utils/theme';
// import Statusbar from '../../Components/Statusbar';

// export default function SeeLive() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: theme.colors.primary,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Statusbar
//         backgroundColor={theme.colors.primary}
//         barStyle="light-content"
//       />
//       <Text>SeeLive</Text>
//     </View>
//   );
// }
