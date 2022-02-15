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
import Header from '../../../Components/Header';
import {FAB} from 'react-native-paper';

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

export default function Explore() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        sourcetwo={require('../../../assets/Search_White.png')}
        Headertext={'Explore'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatList')}
        style={styles.fabcontainer}>
        <Image
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
          }}
          source={require('../../../assets/chat_icon.png')}
        />
      </TouchableOpacity>
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList
          data={EVENTS_FOLLOWED}
          //   horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item, index}) => (
            <View style={{marginTop: -12, alignItems: 'center'}}>
              <ImageBackground
                style={{
                  width: Dimensions.get('window').width - 40,
                  height: Dimensions.get('window').height / 3.3,
                  borderRadius: 10,
                }}
                imageStyle={{
                  width: Dimensions.get('window').width - 40,
                  height: Dimensions.get('window').height / 3.3,
                  borderRadius: 10,
                }}
                source={{uri: 'https://picsum.photos/500'}}>
                <View style={{position: 'absolute', top: 15, left: 15}}>
                  <View style={styles.detail_container}>
                    <ImageBackground
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 50,
                        marginRight: 5,
                      }}
                      imageStyle={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        borderRadius: 50,
                      }}
                      source={{uri: 'https://picsum.photos/500'}}>
                      <View style={{position: 'absolute', right: 0, top: -5}}>
                        <Image
                          style={{height: 10, width: 10, resizeMode: 'contain'}}
                          source={require('../../../assets/tick.png')}
                        />
                      </View>
                    </ImageBackground>

                    <TextFormatted style={{fontSize: 11, fontWeight: '700'}}>
                      Joshua_Azad
                    </TextFormatted>
                  </View>
                </View>
                <View style={{position: 'absolute', bottom: 35, left: 15}}>
                  <View style={styles.detail_container}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        marginRight: 5,
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/Red_heart.png')}></Image>

                    <TextFormatted style={{fontSize: 11, fontWeight: '700'}}>
                      23
                    </TextFormatted>
                  </View>
                </View>
                <View style={{position: 'absolute', bottom: 35, left: 85}}>
                  <View style={styles.detail_container}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        marginRight: 5,
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/Comments.png')}></Image>

                    <TextFormatted style={{fontSize: 11, fontWeight: '700'}}>
                      23
                    </TextFormatted>
                  </View>
                </View>
                <View style={{position: 'absolute', bottom: 42, right: 15}}>
                  <Image
                    style={{
                      height: 28,
                      width: 28,
                      marginRight: 5,
                      resizeMode: 'contain',
                    }}
                    source={require('../../../assets/Donate.png')}></Image>
                </View>
              </ImageBackground>
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
  detail_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary + 'B3',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
  fabcontainer: {
    flex: 1,

    backgroundColor: theme.colors.primary,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingHorizontal: 13,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
