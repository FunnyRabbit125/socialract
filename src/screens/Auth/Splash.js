import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import Statusbar from '../../Components/Statusbar';
function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 1000);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/Splash_1.png')}
      imageStyle={styles.logo}></ImageBackground>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
