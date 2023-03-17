import { Platform, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../hook/reduxhooks';
import { requestCategory } from '../redux/actions/category';
import { clearNews, loadLoading, requestNews } from '../redux/actions/news';
import { baseUrl } from '../services/api/index.service';
import Keychain from 'react-native-keychain';
import DeviceInfo from 'react-native-device-info';
import { encryptData } from '../services/crypto/encryption.service';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // get device info
    async function _getDeviceInfo() {
      let uniqueId = DeviceInfo.getUniqueIdSync();
      let model = Platform.OS;
      let deviceType = DeviceInfo.getDeviceType();
      _mobileAuthorize(uniqueId, model, deviceType);
    }
    _getDeviceInfo();
    dispatch(requestCategory());

  }, [])

  // get secret key from api
  function _mobileAuthorize(uniqueId: string, model: string, deviceType: string) {
    fetch(baseUrl + 'authorize', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        device_id: uniqueId,
        device_type: deviceType,
        model: model
      })
    }).then(response => response.json())
      .then(async (responseData) => {
        let resData: any = JSON.parse(JSON.stringify(responseData));
        if (resData.status_code == 200) {
          let first_key = resData.data.secret_key;
          let second_key = resData.data.secret_iv;
          await Keychain.setGenericPassword(first_key, second_key);
          dispatch(loadLoading(false));
        } else dispatch(loadLoading(false));
      })
  }

    // encrypt data and pass to api for data decryption you can find in saga
    const handleDispatchData = async (item: any) => {
      dispatch(loadLoading(true))
      dispatch(clearNews());
      const data = await encryptData({ id: item?.id, keyword: '' })
      dispatch(requestNews({
        data: data,
        page: 1
      }))
    }

  return (
    <View style={{ flex: 1 }}>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
