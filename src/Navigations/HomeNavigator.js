import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ChatList from '../screens/Home/ChatList';
import BottomTab from '../screens/Home/BottomTab';
import OtherUserProfile from '../screens/Home/OtherUserProfile';
import ChatScreen from '../screens/Home/ChatScreen';
import Settings from '../screens/Home/Settings';
import Analytics from '../screens/Home/Analytics';
import EditProfile from '../screens/Home/EditProfile';
import SeeLive from '../screens/Home/SeeLive';
import Wallet from '../screens/Home/Wallet';
import Paymentmethod from '../screens/Home/Paymentmethod';
import Cards from '../screens/Home/Cards';
import AddNewCard from '../screens/Home/AddNewCard';
import AddStory from '../screens/Home/AddStory';
import Upload_Audio from '../screens/Home/Upload_Audio';

const Stack = createNativeStackNavigator();

function App() {
  // Alert.alert(JSON.stringify(current_step));
  // alert(JSON.stringify(current_step));
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Bottomtab">
      <Stack.Screen name="Bottomtab" component={BottomTab} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SeeLive" component={SeeLive} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Paymentmethod" component={Paymentmethod} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="AddStory" component={AddStory} />
      <Stack.Screen name="Upload_Audio" component={Upload_Audio} />
    </Stack.Navigator>
  );
}

export default App;
