import * as CryptoJS from 'crypto-js';
import Keychain from 'react-native-keychain';

export async function decryptedData(cipherText: string) {
    const _key: any = await Keychain.getGenericPassword()
    const Utf8 = CryptoJS.enc.Utf8;
    const key = CryptoJS.SHA512(_key.username).toString(CryptoJS.enc.Hex).substring(0, 32);
    let iv = CryptoJS.SHA512(_key.password).toString(CryptoJS.enc.Hex).substring(0, 16);

    const encrypt = CryptoJS.enc.Base64.parse(cipherText).toString(Utf8);
    const decrypt = CryptoJS.AES.decrypt(encrypt, Utf8.parse(key), { iv: Utf8.parse(iv) }).toString(Utf8);

    return new Promise(async (resolve, reject) => {
        try {
            resolve(decrypt)
        } catch (error) {
            reject(error);
            console.log('error=====', error);
        }
    });
}


export const decryptData = (value: any) => {
    const data: any = decryptedData(value)
    return data;
}

export async function convertString(text: string) {
    let data = JSON.parse(JSON.stringify(text))
    return data
}