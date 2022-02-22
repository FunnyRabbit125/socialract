import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Appnavigator from './src/Navigations/Appnavigator';
import store, {persistor} from './src/redux/Store';
import Toast from 'react-native-toast-message';
import {Dimensions, View} from 'react-native';
import TextFormatted from './src/Components/TextFormated';
import {theme} from './src/Utils/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Appnavigator />
        <Toast
          visibilityTime={1500}
          autoHide={true}
          config={{
            success: props => (
              <View
                style={{
                  width: Dimensions.get('window').width - 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 16,
                  paddingHorizontal: 20,
                  borderRadius: 6,
                  backgroundColor: theme.colors.secondary,
                }}>
                {/* style={[styles.toastContainer, {backgroundColor: '#22CD7E'}]}> */}
                <TextFormatted
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'left',
                  }}>
                  {props.text1}
                </TextFormatted>
              </View>
            ),
            error: props => (
              <View
                style={{
                  backgroundColor: '#F36566',
                  width: Dimensions.get('window').width - 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 16,
                  paddingHorizontal: 20,
                  borderRadius: 6,
                }}>
                <TextFormatted
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: '500',
                  }}>
                  {props.text1}
                </TextFormatted>
              </View>
            ),
          }}
        />
      </PersistGate>
    </Provider>
  );
}

// import {View, Text} from 'react-native';
// import React from 'react';
// import InstaStory from 'react-native-insta-story';

// const data = [
//   {
//     user_id: 1,
//     user_image:
//       'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
//     user_name: 'Ahmet Çağlar Durmuş',
//     stories: [
//       {
//         story_id: 1,
//         story_image:
//           'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
//         swipeText: 'Custom swipe text for this story',
//         onPress: () => console.log('story 1 swiped'),
//       },
//       {
//         story_id: 2,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//       {
//         story_id: 3,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//       {
//         story_id: 4,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//       {
//         story_id: 5,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//       {
//         story_id: 6,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//       {
//         story_id: 7,
//         story_image:
//           'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
//       },
//     ],
//   },
//   {
//     user_id: 2,
//     user_image:
//       'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
//     user_name: 'Test User',
//     stories: [
//       {
//         story_id: 1,
//         story_image:
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
//         swipeText: 'Custom swipe text for this story',
//         onPress: () => console.log('story 1 swiped'),
//       },
//       {
//         story_id: 2,
//         story_image:
//           'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
//         swipeText: 'Custom swipe text for this story',
//         onPress: () => console.log('story 2 swiped'),
//       },
//     ],
//   },
// ];

// export default function App() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>App</Text>

//       <InstaStory
//         data={data}
//         duration={10}
//         onStart={item => console.log(item)}
//         onClose={item => console.log('close: ', item)}
//         customSwipeUpComponent={
//           <View>
//             <Text>Swipe</Text>
//           </View>
//         }
//         style={{marginTop: 30}}
//       />
//     </View>
//   );
// }
