import * as CryptoJS from 'crypto-js';
import base64 from 'react-native-base64';
import Keychain from 'react-native-keychain';

export async function encryptedData(plainText: Object) {
    const _key: any = await Keychain.getGenericPassword()
    const Utf8 = CryptoJS.enc.Utf8;
    const key = CryptoJS.SHA512(_key.username).toString(CryptoJS.enc.Hex).substring(0, 32);
    let iv = CryptoJS.SHA512(_key.password).toString(CryptoJS.enc.Hex).substring(0, 16);

    const dataString = JSON.stringify(plainText)
    const encryption = CryptoJS.AES.encrypt(dataString, Utf8.parse(key), { iv: Utf8.parse(iv) }).toString();
    const output = base64.encode(encryption)

    return new Promise(async (resolve, reject) => {
        try {
            resolve(output)
        } catch (error) {
            reject(error);
            console.log('error=====', error);
        }
    });
}


export const encryptData = (value: any) => {
    const data: any = encryptedData(value)
    return data;
}
