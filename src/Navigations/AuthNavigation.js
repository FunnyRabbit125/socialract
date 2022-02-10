import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from '../screens/Auth/Splash';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Signup from '../screens/Auth/Signup';
import otpVerify from '../screens/Auth/otpVerify';
import Terms_Conditions from '../screens/Auth/Terms&Conditions';
import HomeNavigator from './HomeNavigator';
const Stack = createNativeStackNavigator();

function App() {
  // Alert.alert(JSON.stringify(current_step));
  // alert(JSON.stringify(current_step));
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="otpVerify" component={otpVerify} />
      <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
}

export default App;
