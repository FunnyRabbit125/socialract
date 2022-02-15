import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',
    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '2',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '3',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '4',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '5',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '1',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',
    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '2',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '3',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '4',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '5',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
];
export default function Wallet() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: theme.colors.secondary,
          paddingVertical: 13,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '33%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{height: 20, width: 20, resizeMode: 'contain'}}
              source={require('../../assets/back_white.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Headertext
          </TextFormatted>
        </View>
        <View style={{width: '33%', alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{borderWidth: 0}}
            onPress={() => navigation.navigate('Paymentmethod')}>
            <TextFormatted
              style={{
                color: theme.colors.primary,
                fontSize: 10,
                fontWeight: '600',
                textAlign: 'center',
                textDecorationLine: 'underline',
              }}>
              Add Amount
            </TextFormatted>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 30,
            width: Dimensions.get('window').width - 40,
            backgroundColor: theme.colors.secondary,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 15,
          }}>
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontSize: 30,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            $255
          </TextFormatted>
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontSize: 13,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Available Balance
          </TextFormatted>
        </View>
        <TextFormatted
          style={{
            color: theme.colors.OtherText,
            fontSize: 13,
            fontWeight: '500',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          Payment History
        </TextFormatted>

        <View
          style={{
            flex: 1,
            // width: Dimensions.get('window').width - 40,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            // horizontal={true}
            data={DATA}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 15,
                  // width: Dimensions.get('window').width - 40,
                  justifyContent: 'space-between',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  backgroundColor: theme.colors.primary,
                  paddingVertical: 7,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  marginHorizontal: 20,
                }}>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: Dimensions.get('window').width - 80,
                      justifyContent: 'space-between',

                      //   borderWidth: 1,
                    }}>
                    <TextFormatted style={{fontWeight: '700', fontSize: 16}}>
                      $399.00
                    </TextFormatted>

                    <Image
                      style={{height: 30, width: 30, resizeMode: 'contain'}}
                      source={require('../../assets/received.png')}
                    />
                  </View>
                  <View style={{}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // width: Dimensions.get('window').width - 40,
                        justifyContent: 'space-between',

                        //   borderWidth: 1,
                      }}>
                      <TextFormatted
                        style={{
                          maxWidth: 290,
                          marginTop: 10,
                          color: theme.colors.placeholder,
                          fontWeight: '700',
                        }}>
                        ID:
                        <TextFormatted
                          style={{
                            marginTop: 10,
                            color: theme.colors.placeholder,
                          }}>
                          #3478VJHJSHF
                        </TextFormatted>
                      </TextFormatted>
                      <TextFormatted
                        style={{
                          marginTop: 10,
                          color: theme.colors.placeholder,
                        }}>
                        6 June 2019
                      </TextFormatted>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
