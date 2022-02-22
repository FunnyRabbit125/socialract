import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import LoadingSpinner from '../../Components/Loading';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import {theme} from '../../Utils/theme';

export default class OTPVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      spinnerVisible: false,
    };
  }

  componentDidMount = () => {
    this.refs.pin1ref.focus();
    // alert(JSON.stringify(storse.getState().currentFlow));
  };
  render() {
    // console.log(store.getState().CurrentFlow);
    const params = this.props.route.params;
    // const {params} = useRoute();
    // alert(params);
    const {pin1, pin2, pin3, pin4, pin5, pin6} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.primary,
          // justifyContent: 'center',
        }}>
        <LoadingSpinner
          size={60}
          visible={this.state.spinnerVisible}
          color={theme.colors.accent}
        />

        <Statusbar
          backgroundColor={theme.colors.Linear_first}
          barStyle="dark-content"
        />
        <Header
          onPress={() => this.props.navigation.goBack()}
          source={require('../../assets/Back.png')}
          backgroundColor={theme.colors.primary}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.primary,
            marginTop: 50,
          }}>
          <Image
            source={require('../../assets/logo_.png')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').width / 6,
              resizeMode: 'contain',
              // backgroundColor: 'red',
            }}
          />
          {/* </View> */}

          <View
            style={{
              // flex: 1.5,
              backgroundColor: theme.colors.primary,
              alignItems: 'center',
            }}>
            <View style={{marginTop: 40}}>
              <TextFormatted
                style={{
                  color: theme.colors.Black,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                OTP has been sent your email
              </TextFormatted>
            </View>

            <View
              style={{
                alignSelf: 'flex-start',
                marginHorizontal: 30,
                alignSelf: 'center',
              }}>
              <TextFormatted
                style={{
                  color: theme.colors.text,
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Please enter your OTP code
              </TextFormatted>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
                marginTop: 40,
              }}>
              <TextInput
                autoFocus={true}
                value={pin1}
                ref={'pin1ref'}
                keyboardType="number-pad"
                onChangeText={pin1 => {
                  this.setState({pin1: pin1});
                  if (pin1 != '') {
                    this.refs.pin2ref.focus();
                  }
                }}
                maxLength={1}
                style={Styles.input}
              />
              <TextInput
                ref={'pin2ref'}
                value={pin2}
                keyboardType="number-pad"
                onChangeText={pin2 => {
                  this.setState({pin2: pin2});
                  if (pin2 != '') {
                    this.refs.pin3ref.focus();
                  }
                }}
                maxLength={1}
                style={Styles.input}
              />
              <TextInput
                ref={'pin3ref'}
                keyboardType="number-pad"
                value={pin3}
                onChangeText={pin3 => {
                  this.setState({pin3: pin3});
                  if (pin3 != '') {
                    this.refs.pin4ref.focus();
                  }
                }}
                maxLength={1}
                style={Styles.input}
              />
              <TextInput
                ref={'pin4ref'}
                keyboardType="number-pad"
                value={pin4}
                onChangeText={pin4 => {
                  this.setState({pin4: pin4});
                  if (pin4 != '') {
                    this.refs.pin5ref.focus();
                  }
                }}
                maxLength={1}
                style={Styles.input}
              />
              <TextInput
                ref={'pin5ref'}
                keyboardType="number-pad"
                value={pin5}
                onChangeText={pin5 => {
                  this.setState({pin5: pin5});
                  if (pin3 != '') {
                    this.refs.pin6ref.focus();
                  }
                }}
                maxLength={1}
                style={Styles.input}
              />
              <TextInput
                ref={'pin6ref'}
                keyboardType="number-pad"
                value={pin6}
                onChangeText={pin6 => {
                  this.setState({pin6: pin6}, () => {
                    if (pin6 != '') {
                      // this.props.navigation.navigate('HomeNavigator');
                    }
                  });
                }}
                maxLength={1}
                style={Styles.input}
              />
            </View>
            {/* <View style={{marginTop: 50}}>
            <Button
            buttontext="Verify"
            onPress={() => this.props.navigation.navigate('otpVerify')}
            />
          </View> */}
          </View>
          <View style={{marginHorizontal: 20, marginVertical: 40}}>
            <Button
              // onPress={() => this.props.navigation.navigate('HomeNavigator')}
              buttontext={'Verify'}
            />
          </View>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 25,
    textAlignVertical: 'center',
    includeFontPadding: false,
    height: 50,
    padding: 0,
    width: 50,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#37393E',
    color: theme.colors.Black,
    backgroundColor: theme.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginRight: 8,
    flexShrink: 1,
  },
});
