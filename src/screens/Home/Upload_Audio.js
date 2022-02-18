import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Statusbar from '../../Components/Statusbar';
import {theme} from '../../Utils/theme';
import Header from '../../Components/Header';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../Components/TextFormated';

export default function Upload_Audio() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <Header
        source={require('../../assets/back_white.png')}
        Headertext={'Upload Audio'}
        backgroundColor={theme.colors.secondary}
        textcolor={theme.colors.primary}
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flex: 1,
          marginBottom: 30,
        }}>
        <View>
          <ImageBackground
            source={require('../../assets/recording.png')}
            style={{
              height: Dimensions.get('window').height / 3,
              width: Dimensions.get('window').width,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
              overflow: 'hidden',
            }}
            imageStyle={{
              height: Dimensions.get('window').height / 3.5,
              width: Dimensions.get('window').width,
              resizeMode: 'contain',
            }}></ImageBackground>
          <Image
            source={require('../../assets/Audio_line.png')}
            style={{
              height: Dimensions.get('window').height / 5,
              width: Dimensions.get('window').width - 40,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 50}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Rotate.png')}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/mic_black.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Close_circle.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
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
        </View>
      </ScrollView>
    </View>
  );
}
