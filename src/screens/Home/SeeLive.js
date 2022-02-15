// import {View, Text, StyleSheet, Image} from 'react-native';
// import React, {useRef} from 'react';
// import Video from 'react-native-video';
// import TextFormatted from '../../Components/TextFormated';
// import {theme} from '../../Utils/theme';
// import Statusbar from '../../Components/Statusbar';
// import Header from '../../Components/Header';
// import {useNavigation} from '@react-navigation/native';

// export default function SeeLive() {
//   const navigation = useNavigation();

//   return (
// <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
//   <Statusbar
//     // backgroundColor={theme.colors.secondary}
//     barStyle="light-content"
//   />
//       <View style={{height: 10}} />
//       <Video
//         source={{
//           uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
//           headers: {
//             Authorization: 'bearer some-token-value',
//             'X-Custom-Header': 'some value',
//           },
//         }}
//         fullscreen
//         resizeMode="cover"
//         ref={ref => {
//           player = ref;
//         }}
//         style={styles.backgroundVideo}
//       />
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           marginHorizontal: 20,
//         }}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             style={{
//               height: 40,
//               width: 40,
//               resizeMode: 'contain',
//               marginRight: 10,
//               borderRadius: 30,
//             }}
//             source={{uri: 'https://picsum.photos/500'}}
//           />
//           <TextFormatted
//             style={{fontWeight: '700', color: theme.colors.primary}}>
//             maxjacobson
//           </TextFormatted>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             style={{
//               height: 35,
//               width: 35,
//               resizeMode: 'contain',
//             }}
//             source={require('../../assets/Live_screen.png')}
//           />
//           <View style={{width: 12}} />
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//               paddingVertical: 4,
//               paddingHorizontal: 8,
//               backgroundColor: theme.colors.Black + '4D',
//               borderRadius: 4,
//             }}>
//             <Image
//               style={{
//                 height: 12,
//                 width: 12,
//                 resizeMode: 'contain',
//                 marginRight: 5,
//               }}
//               source={require('../../assets/eye_icon.png')}
//             />
//             <TextFormatted
//               style={{fontWeight: '700', color: theme.colors.primary}}>
//               2
//             </TextFormatted>
//           </View>
//           <View style={{width: 12}} />

//           <Image
//             style={{
//               height: 20,
//               width: 20,
//               resizeMode: 'contain',
//               marginRight: 10,
//             }}
//             source={require('../../assets/cancel_white.png')}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
import {View, Text} from 'react-native';
import React from 'react';
import {theme} from '../../Utils/theme';
import Statusbar from '../../Components/Statusbar';

export default function SeeLive() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Statusbar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <Text>SeeLive</Text>
    </View>
  );
}
