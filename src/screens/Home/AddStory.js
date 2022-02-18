import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';
// import ImageResizer from 'react-native-image-resizer';
import LiveMsgSendBar from '../../Components/LiveMsgSendBar';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import {theme} from '../../Utils/theme';

const CHATS_DATA = [
  {
    type: 'Type',
  },
  {
    type: 'Live',
  },
  {
    type: 'Normal',
  },
  {
    type: 'Boomerang',
  },
  {
    type: 'Superzoom',
  },
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function Camera(props) {
  const CameraRef = useRef(RNCamera);
  const [cameraBack, setCameraBack] = useState(true);
  const [red, setRed] = useState(127.5);
  const [green, setGreen] = useState(127.5);
  const [blue, setBlue] = useState(127.5);
  const [a, setA] = useState(0.5);
  const dimensions = useWindowDimensions();
  const [random, setRandom] = useState(Array(0).fill(''));
  const {params = {}} = useRoute();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [flashMode, setFlashMode] = useState(2);

  // useEffect(() => {
  //     setRandom(map(Array(200).fill(''), () => Math.random() > 0.5))
  //     const tmt = setInterval(() => {
  //         setRandom(map(Array(200).fill(''), () => Math.random() > 0.5))
  //     }, 500)
  //     return () => clearInterval(tmt)
  // }, [])

  return (
    <View style={{flex: 1}}>
      <Statusbar hidden={true} />
      {!image ? (
        <RNCamera
          ref={CameraRef}
          style={{flex: 1}}
          type={
            cameraBack
              ? RNCamera.Constants.Type.back
              : RNCamera.Constants.Type.front
          }
          flashMode={flashMode == 0 ? 'on' : flashMode == 1 ? 'off' : 'auto'}
          useNativeZoom
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => (
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View
                style={{
                  top: 25 + StatusBar.currentHeight,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  // borderWidth: 2,
                  //   backgroundColor: '#fff',
                }}>
                <TouchableOpacity
                  //   style={{borderWidth: 1, borderColor: '#fff'}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Icon
                    name={'arrow-back'}
                    size={30}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 70,
                  right: 20,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Upload_Audio')}>
                  <Image
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                    source={require('../../assets/Audio.png')}
                  />
                </TouchableOpacity>
                <View style={{width: 20}} />
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                    source={require('../../assets/Text.png')}
                  />
                </TouchableOpacity>
                <View style={{width: 20}} />
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                    source={require('../../assets/Edit_whitw.png')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  bottom: 125,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    launchImageLibrary(
                      {
                        mediaType: 'photo',
                        quality: 0.5,
                      },
                      res => {
                        console.log(res);
                        if (res.didCancel) {
                          return;
                        }
                        if (res.errorMessage) {
                          alert(res.errorMessage);
                          return;
                        }
                        params.setImage(
                          res.assets[0].uri,
                          res.assets[0].fileName,
                          res.assets[0].type,
                        );
                        navigation.goBack();
                      },
                    )
                  }>
                  <Image
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                    source={require('../../assets/gallery.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFlashMode(v => (v + 1 > 2 ? 0 : v + 1));
                  }}>
                  <Image
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                    source={require('../../assets/flash.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    const pic = await CameraRef.current.takePictureAsync();

                    setImage(pic);
                    // params.setImage(pic.uri, pic.uri.split('/').reverse()[0], 'image/jpeg')
                    // navigation.goBack()
                  }}>
                  <Image
                    style={{height: 80, width: 80, resizeMode: 'contain'}}
                    source={require('../../assets/image_click.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCameraBack(v => !v)}>
                  <Image
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                    source={require('../../assets/rotate_white.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                    source={require('../../assets/emoji.png')}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  paddingBottom: 25,
                  backgroundColor: theme.colors.primary,
                  width: Dimensions.get('window').width,
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: 0,
                  paddingTop: 10,
                }}>
                <View style={{}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={CHATS_DATA}
                    inverted
                    horizontal
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginVertical: 10,
                          }}>
                          <TextFormatted
                            style={{
                              fontWeight: '600',
                              color: theme.colors.Black,
                              marginHorizontal: 10,
                              fontSize: 17,
                            }}>
                            {item.type}
                          </TextFormatted>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        </RNCamera>
      ) : (
        <View style={{flex: 1}}>
          <Image
            source={{uri: image.uri}}
            style={{
              flex: 1,
              height: dimensions.height,
              width: dimensions.width,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              bottom: 90,
              position: 'absolute',
              width: dimensions.width,
              backgroundColor: theme.colors.primary,
              paddingVertical: 10,
              borderColor: theme.colors.Placeholder,
              borderBottomWidth: 3,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Rotate.png')}
                style={{
                  height: 26,
                  width: 26,
                  resizeMode: 'contain',
                }}
              />
              <TextFormatted style={{fontSize: 12, marginTop: 5}}>
                Rotate
              </TextFormatted>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={async () => {
                const response = await ImageResizer.createResizedImage(
                  image.uri,
                  1280,
                  1280,
                  'JPEG',
                  50,
                  0,
                  null,
                  true,
                  {
                    mode: 'cover',
                    onlyScaleDown: true,
                  },
                );
                console.log(response);
                params.setImage(response.uri, response.name, 'image/jpeg');
                navigation.goBack();
              }}>
              <Image
                source={require('../../assets/Adjust.png')}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                }}
              />
              <TextFormatted style={{fontSize: 12, marginTop: 5}}>
                Adjust
              </TextFormatted>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setImage(null)}>
              <Image
                source={require('../../assets/Crop.png')}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                }}
              />
              <TextFormatted style={{fontSize: 12, marginTop: 5}}>
                Crop
              </TextFormatted>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              height: 40,
              backgroundColor: theme.colors.background,
              width: '100%',
            }}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              bottom: 30,
              backgroundColor: theme.colors.primary,
              paddingVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/Downlaod.png')}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <View style={{width: 20}} />

              <TouchableOpacity>
                <Image
                  source={require('../../assets/Lock.png')}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <TextFormatted
                style={{fontWeight: '700', color: theme.colors.secondary}}>
                ADD TO STORY {'>'}
              </TextFormatted>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20 + StatusBar.currentHeight,
              right: 20,
              backgroundColor: '#0005',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 8,
            }}
            onPress={() => {
              navigation.navigate('FilterImage', {
                image,
                setImage: uri => {
                  setImage(v => ({
                    ...v,
                    uri: uri,
                  }));
                },
              });
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Add Filter</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20 + StatusBar.currentHeight,
              right: 20,
              backgroundColor: '#0005',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 8,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

Camera.routeName = 'Camera';

export default Camera;
