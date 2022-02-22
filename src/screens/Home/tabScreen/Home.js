import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../../../Utils/theme';
import Statusbar from '../../../Components/Statusbar';
import TextFormatted from '../../../Components/TextFormated';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../Components/Button';
import CustomTextInput from '../../../Components/TextInput';
import {baseUrl} from '../../../Utils/constance';
import {useSelector} from 'react-redux';
import {ShowToast} from '../../../Utils/ToastFunction';
import {ActivityIndicator} from 'react-native-paper';
import {UPDATEPROFILE} from '../../../redux/Actions/ActonTypes';
import store from '../../../redux/Store';

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
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState('');
  const [user_name, setUser_name] = useState('');
  // const {params} = useRoute();

  const [showmodal, setShowmodal] = useState(false);

  const auth = useSelector(state => state.auth);

  // alert(JSON.stringify(auth));

  const showModal = () => setShowmodal(true);
  const hideModal = () => setShowmodal(false);

  async function Create_user_name() {
    if (!user_name) {
      ShowToast('Please enter user name.', 'error');
      return;
    }

    try {
      setLoading(true);
      const url = baseUrl + 'create_user_name';

      const body = new FormData();
      body.append('user_id', auth.id);
      body.append('user_name', user_name);

      const res = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      console.log(res);
      const rslt = await res.json();
      console.log(rslt);

      if (rslt.status == '1') {
        store.dispatch({
          type: UPDATEPROFILE,
          payload: {...rslt.result, Modal: false},
        });
        hideModal();
        ShowToast('User name created successfully');
      } else {
        ShowToast(rslt.message || 'Unknown error', 'error');
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // alert('An error occured.');
      ShowToast('An error occured.', 'error');

      console.log(e);
    }
  }

  useEffect(() => {
    auth.Modal == true && showModal();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Modal visible={showmodal} onDismiss={hideModal} transparent style={{}}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <TouchableOpacity
            onPress={hideModal}
            activeOpacity={1}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.Black + '66',
            }}>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={1}
              style={{
                backgroundColor: theme.colors.primary,
                padding: 30,
                paddingBottom: 0,
                width: Dimensions.get('window').width - 80,
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <TextFormatted
                style={{
                  textAlign: 'center',
                  color: theme.colors.Black,
                  fontWeight: '700',
                }}>
                Create your username
              </TextFormatted>
              <View style={{marginTop: 20}}>
                <CustomTextInput
                  placeholder={'User name'}
                  Focus_Heading={'User name'}
                  onFocus={() => setFocus('Focus')}
                  onBlur={() => setFocus('lost')}
                  find={focus}
                  value={user_name}
                  onChangeText={setUser_name}
                  width={Dimensions.get('window').width - 120}
                />
                {user_name == '' ? (
                  <View />
                ) : (
                  <TextFormatted
                    style={{
                      textAlign: 'center',
                      color: theme.colors.Like,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Username available
                  </TextFormatted>
                )}
              </View>
              {loading ? (
                <View style={{marginBottom: 30}}>
                  <ActivityIndicator color={theme.colors.secondary} />
                </View>
              ) : (
                <View style={{marginVertical: 30}}>
                  <Button
                    onPress={() => Create_user_name()}
                    buttontext={'Submit'}
                    width={Dimensions.get('window').width / 2}
                    // onPress={() => navigation.navigate('OTPVerify')}
                  />
                </View>
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>

      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingBottom: 10,
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width / 3,
            height: Dimensions.get('window').width / 6,
            // borderWidth: 1,
            alignSelf: 'center',
          }}
          source={require('../../../assets/logo_.png')}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width / 5,
            flexShrink: 1,
          }}>
          <TouchableOpacity>
            <Image
              style={{height: 30, width: 30, resizeMode: 'contain'}}
              source={require('../../../assets/Live.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            //
            onPress={() => showModal()}>
            {/* onPress={() => navigation.navigate('Wallet')}> */}
            <Image
              style={{height: 25, width: 25, resizeMode: 'contain'}}
              source={require('../../../assets/Wallet_gray.png')}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Image
              style={{height: 25, width: 25, resizeMode: 'contain'}}
              source={require('../../../assets/Search.png')}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* HEADER */}

      {/* FLOATING BUTTON */}
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
      {/* FLOATING BUTTON */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* STORY LIST */}
        <View style={{marginTop: 10}}>
          <FlatList
            data={EVENTS_FOLLOWED}
            horizontal
            style={{marginLeft: 5}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 10}}
            ListHeaderComponent={
              <TouchableOpacity
                onPress={() => navigation.navigate('AddStory')}
                style={{
                  alignItems: 'center',
                  // borderWidth: 1,
                  paddingBottom: 5,
                  marginRight: 10,
                  marginLeft: 15,
                  width: Dimensions.get('window').width / 4.3,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  backgroundColor: '#fff',
                }}>
                <ImageBackground
                  // onPress={() => navigation.navigate('BrowseEvent', item.id)}
                  style={styles.myimagebg}
                  imageStyle={styles.myimagestyle}
                  source={{uri: 'https://picsum.photos/500'}}>
                  <View style={{position: 'absolute', top: -12, right: -3}}>
                    <Image
                      source={require('../../../assets/add_story.png')}
                      style={{width: 24, resizeMode: 'contain', height: 35}}
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
                    color: theme.colors.Black,
                    marginVertical: 5,
                  }}>
                  Add Story
                </Text>
              </TouchableOpacity>
            }
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('SeeLive')}
                style={{
                  alignItems: 'center',
                  // borderWidth: 1,
                  paddingBottom: 5,
                  marginHorizontal: 10,
                  width: Dimensions.get('window').width / 4.3,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  backgroundColor: '#fff',
                }}>
                <ImageBackground
                  // onPress={() => navigation.navigate('BrowseEvent', item.id)}
                  style={styles.myimagebg}
                  imageStyle={styles.myimagestyle}
                  source={{uri: 'https://picsum.photos/500'}}>
                  <View style={{position: 'absolute', top: -12, right: -8}}>
                    <Image
                      source={require('../../../assets/live_icon_.png')}
                      style={{width: 38, resizeMode: 'contain', height: 38}}
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
                    color: theme.colors.Black,
                  }}>
                  See Story
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* STORY LIST */}

        {/* POST LIST */}
        <View style={{flex: 1}}>
          <FlatList
            data={EVENTS_FOLLOWED}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{}}
            renderItem={({item, index}) => (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  // marginHorizontal: 15,
                  marginVertical: 15,
                }}>
                <View
                  style={{
                    backgroundColor: theme.colors.post_bg,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  <ImageBackground
                    style={{
                      width: Dimensions.get('window').width / 1.4,
                      height: Dimensions.get('window').height / 5,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                    imageStyle={{
                      width: Dimensions.get('window').width / 1.4,
                      height: Dimensions.get('window').height / 5,
                      borderRadius: 10,
                    }}
                    source={{uri: 'https://picsum.photos/500'}}>
                    <View style={{position: 'absolute', top: -8, left: -13}}>
                      <Image
                        source={require('../../../assets/More_.png')}
                        style={{width: 35, resizeMode: 'contain', height: 35}}
                      />
                    </View>
                  </ImageBackground>
                  <View style={{width: 270}}>
                    <TextFormatted
                      style={{
                        fontSize: 10,
                        marginVertical: 10,
                        lineHeight: 23,
                        color: theme.colors.Black,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('OtherUserProfile')}>
                    <ImageBackground
                      style={{
                        height: 45,
                        width: 45,
                        borderRadius: 50,
                      }}
                      imageStyle={{
                        height: 45,
                        width: 45,
                        resizeMode: 'cover',
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
                  </TouchableOpacity>

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
                    <TextFormatted
                      style={{
                        color: theme.colors.Black,
                        fontSize: 12,
                        fontWeight: '600',
                      }}>
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
                    <TextFormatted
                      style={{
                        color: theme.colors.Black,
                        fontSize: 12,
                        fontWeight: '600',
                      }}>
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
        {/* POST LIST */}
      </ScrollView>
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
    borderWidth: 1,
  },
  imagestyle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colors.primary,
    resizeMode: 'cover',
  },
  myimagebg: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 4.3,
    height: Dimensions.get('window').width / 4.3,
    alignItems: 'center',
  },
  myimagestyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
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
