import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import Button from '../../../../Components/Button';
import SettingOptions from '../../../../Components/SettingOptions';
import Statusbar from '../../../../Components/Statusbar';
import TextFormatted from '../../../../Components/TextFormated';
import Loading from '../../../../Components/Loading';
import {baseUrl} from '../../../../Utils/constance';
import {theme} from '../../../../Utils/theme';
import {ShowToast} from '../../../../Utils/ToastFunction';

export default function VideoUpload({navigate}) {
  const navigation = useNavigation();

  const [current_step, setCurrent_step] = useState(0);

  const [uri, setUri] = useState('');
  // alert(uri);
  const [description, setDescription] = useState('');
  const [like_count, setLike_count] = useState(0);
  const [comment, setComment] = useState(0);
  const [donation, setDonation] = useState(0);
  const [donation_count, setDonation_count] = useState(0);
  const [donation_users, setDonation_users] = useState(0);
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  const pickImageAndUpload = () => {
    launchImageLibrary({quality: 0.5}, fileobj => {
      if (!fileobj.didCancel) setUri(fileobj.assets[0]);
    });
  };

  useEffect(() => {
    uri == '' ? pickImageAndUpload() : null;
  }, []);

  async function App_Post() {
    try {
      setLoading(true);
      const url = baseUrl + 'add_post';

      const body = new FormData();
      body.append('user_id', auth.id);
      body.append('description', description);
      body.append('like_count', like_count);
      body.append('comment_icon', comment);
      body.append('donation_icon', donation);
      body.append('donation_count', donation_count);
      body.append('donation_user', donation_users);
      body.append('type', 'Photo');
      body.append('image', {
        uri: uri.uri,
        type: uri.type,
        name: uri.fileName,
      });

      console.log(body);

      const res = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      console.log(res);
      const rslt = await res.json();
      console.log(rslt);

      if (rslt.status == '1') {
        ShowToast('Post upload successfully');
        setDescription('');
        navigate(0);
      } else {
        ShowToast(rslt.message || 'Unknown error', 'error');
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // alert('An error occured.');
      ShowToast('An error occured.', 'error');

      console.log(e);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Loading size={60} visible={loading} color={theme.colors.secondary} />

      <Statusbar
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: theme.colors.secondary,
          paddingVertical: 13,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (current_step == 0) {
              pickImageAndUpload();
            } else {
              setCurrent_step(0);
            }
          }}>
          <TextFormatted style={{fontSize: 16, color: theme.colors.primary}}>
            Cancel
          </TextFormatted>
        </TouchableOpacity>
        <TextFormatted style={{fontSize: 16, color: theme.colors.primary}}>
          Recents
        </TextFormatted>
        <TouchableOpacity onPress={() => setCurrent_step(1)}>
          <TextFormatted
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: theme.colors.primary,
              opacity: current_step == 0 ? 10 : 0,
            }}>
            {current_step == 0 ? 'Next' : 'Next'}
          </TextFormatted>
        </TouchableOpacity>
      </View>
      {current_step == 0 ? (
        <Image
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            resizeMode: 'cover',
          }}
          source={{uri: uri?.uri}}
        />
      ) : (
        <ScrollView>
          <View
            style={{
              borderWidth: 2,
              height: 170,
              marginHorizontal: 20,
              borderRadius: 20,
              borderColor: theme.colors.C4C4C4,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: 40,
              marginBottom: 20,
            }}>
            <TextInput
              style={{
                fontSize: 17,
                color: theme.colors.Black,
                fontWeight: '600',
              }}
              placeholderTextColor={theme.colors.placeholder}
              placeholder="What’s on your mind?"
              multiline={true}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <SettingOptions
              setSelected={setLike_count}
              switchh
              selected={like_count}
              text={'Like Count'}
              fontSize={16}
              color={theme.colors.Black}
              fontWeight={'600'}
            />
            <SettingOptions
              setSelected={setComment}
              switchh
              selected={comment}
              text={'Comment Icon'}
              fontSize={16}
              color={theme.colors.Black}
              fontWeight={'600'}
            />
            <SettingOptions
              setSelected={setDonation}
              switchh
              selected={donation}
              fontSize={16}
              text={'Donation Icon'}
              color={theme.colors.Black}
              fontWeight={'600'}
            />
            <SettingOptions
              setSelected={setDonation_count}
              switchh
              selected={donation_count}
              text={'Donation Count'}
              fontSize={16}
              color={theme.colors.Black}
              fontWeight={'600'}
            />
            <SettingOptions
              setSelected={setDonation_users}
              switchh
              selected={donation_users}
              text={'Donation Users'}
              fontSize={16}
              color={theme.colors.Black}
              fontWeight={'600'}
            />
            <View style={{height: 30}} />
            <Button onPress={() => App_Post()} buttontext={'Add Post'} />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
