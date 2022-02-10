import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator();

function App() {
  //   // Alert.alert(JSON.stringify(current_step));
  //   // alert(JSON.stringify(current_step));
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        //   initialRouteName="Bottomtab"
      >
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        {/* <Stack.Screen name="HomeNavigator" component={HomeNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//   const isLoggedIn = useSelector(state => !!state?.auth?.id);

//   if (!isLoggedIn) {
//     return (
//       <NavigationContainer>
//         <AuthNavigation />
//       </NavigationContainer>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <HomeNavigator />
//     </NavigationContainer>
//   );
// }

export default App;
