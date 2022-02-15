import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import Statusbar from '../../Components/Statusbar';
function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 1000);

  return (
    <ImageBackground
      source={require('../../assets/splash_1.png')}
      style={styles.container}
      imageStyle={styles.image_container}
      imageStyle={{flex: 1, resizeMode: 'contain'}}>
      {/* <Statusbar backgroundColor="#000" barStyle="dark-content" /> */}
      {/* <Image style={styles.logo} source={require('../../assets/LOGO.png')} /> */}
    </ImageBackground>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    // borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_container: {
    flex: 1,
    resizeMode: 'contain',
  },
});
