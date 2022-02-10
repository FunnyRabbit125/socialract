import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import BottomTab from '../screens/Home/BottomTab';

const Stack = createNativeStackNavigator();

function App() {
  // Alert.alert(JSON.stringify(current_step));
  // alert(JSON.stringify(current_step));
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Bottomtab">
      <Stack.Screen name="Bottomtab" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default App;
