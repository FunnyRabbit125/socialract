import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 1000);

  return (
    <ImageBackground
      source={require('../../assets/splash_1.png')}
      style={styles.container}
      imageStyle={{flex: 1, resizeMode: 'contain'}}></ImageBackground>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
