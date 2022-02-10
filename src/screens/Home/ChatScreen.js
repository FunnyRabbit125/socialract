import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Statusbar from '../../Components/Statusbar';
import TextFormatted from '../../Components/TextFormated';
import {theme} from '../../Utils/theme';
// import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import ChatHeader from '../../../Components/ChatHeader';

const CHATS_DATA = [
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'Hellow',
    isOwn: true,
    messageId: '1',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message: 'I am Fine',
    isOwn: true,
    messageId: '3',
  },
  {
    user_name: 'Ryan Joseph',
    personId: '2',
    // image: require('../../../Assets/Clock.png'),
    message: 'How are you..?? ',
    isOwn: false,
    messageId: '2',
  },
  {
    user_name: 'Dina Meyer',
    personId: '1',
    // image: require('../../../Assets/Clock.png'),
    message:
      'I am Finevodfbvdfgbfbfgbnkjngdfghghdkfhhdfjkhfkhfdhjkdkdfjkdfkfjkdfdjkdfkvdfjkdfjkjkfkddkkldjkdjkghdjk',
    isOwn: true,
    messageId: '3',
  },
].reverse();

function Chat(props) {
  const [CHATS, setChats] = useState(CHATS_DATA);
  const [messagesending, setMessagesending] = useState(false);
  const [messagetextinput, setMessagetextinput] = useState('');
  const [messageloading, setMessageloading] = useState(true);
  const [messages, setMessages] = useState([]);

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            backgroundColor: theme.colors.secondary,
            paddingVertical: 13,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginRight: 20,
              }}
              source={require('../../assets/back_white.png')}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'flex-start'}}>
            <TextFormatted
              style={{
                color: theme.colors.primary,
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              joshua_l
            </TextFormatted>
            <TextFormatted
              style={{
                color: theme.colors.online,
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Active 1 hr ago
            </TextFormatted>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.messageId + '' + index + ''}
          data={CHATS_DATA}
          // scrollEnabled={false}
          inverted
          renderItem={({item, index}) => {
            const prevMessage =
              index == CHATS_DATA.length - 1 ? {} : CHATS_DATA[index + 1];
            const isSamePerson = prevMessage.personId == item.personId;
            const isOwn = item.isOwn == item.personId;
            return (
              <View
                style={{
                  alignItems: isOwn ? 'flex-end' : 'flex-start',
                  marginTop: isSamePerson ? 0 : 30,
                  flex: 1,
                }}>
                {!isSamePerson && (
                  <View
                    style={[
                      styles.SamePerson,
                      {flexDirection: isOwn ? 'row' : 'row-reverse'},
                    ]}>
                    <View
                      style={{
                        alignItems: isOwn == true ? 'flex-start' : 'flex-end',
                        maxWidth: '85%',
                      }}>
                      <View style={styles.msg_Container}>
                        <TextFormatted
                          style={{
                            color: theme.colors.primary,
                            fontWeight: '500',
                          }}>
                          {item.message}
                        </TextFormatted>
                      </View>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginLeft: isOwn == true ? 10 : 0,
                        marginRight: isOwn == true ? 0 : 10,
                      }}>
                      <Image
                        style={{
                          height: 35,
                          width: 35,
                          resizeMode: 'cover',
                          borderRadius: 50,
                          borderWidth: 2,
                          borderColor: theme.colors.secondary,
                        }}
                        source={{uri: 'https://picsum.photos/500'}}
                      />
                      <TextFormatted style={styles.time}>
                        10:30 Am
                      </TextFormatted>
                    </View>
                  </View>
                )}
              </View>
            );
          }}
        />
        <View style={styles.input_Container}>
          <View style={styles.inner_input_Container}>
            <Image
              style={styles.icon}
              source={require('../../assets/Camera_White.png')}
            />
            <TextInput
              maxHeight={100}
              multiline={true}
              placeholder="Type you message here..."
              style={{flex: 1, paddingLeft: 15}}
              value={messagetextinput}
              onChangeText={setMessagetextinput}
              placeholderTextColor={theme.colors.primary}
            />
          </View>
          <Image
            style={styles.send_Button}
            source={require('../../assets/Send_white.png')}
          />
        </View>
      </View>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  Conversation_start_container: {
    flexDirection: 'row',
    // width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  Conversation_start_Text: {
    fontSize: 15,
    fontWeight: '700',
  },
  SamePerson: {
    alignItems: 'center',
    marginBottom: 5,
    marginHorizontal: 20,
  },
  msg_Container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: theme.colors.secondary,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 10,
    marginTop: 5,
    fontWeight: '600',
    color: theme.colors.Black,
  },
  input_Container: {
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 10,
    paddingRight: 5,
    justifyContent: 'space-between',
  },
  inner_input_Container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 13,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  send_Button: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: 20,
    // borderWidth: 1,
    marginTop: 7,
  },
});
