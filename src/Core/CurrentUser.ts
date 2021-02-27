
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveData} from "./saveData";
import {readData} from "./readData";

type user = {
  userToken: string | null;
  userId: string | null;
  name: string | null;
  userTheme: string
};

class CurrentUserImpl {
  private _user: user;
  private _deviceToken: string | null;
  constructor() {
    this._user = {
      userId: null,
      userToken: null,
      name: null,
      userTheme: 'default'
    };
    this._deviceToken = null;
  }
  get user(): user {
    return this._user;
  }
  set userToken(userToken) {
    this.user.userToken = userToken;
  }
  get deviceToken() {
    return this._deviceToken;
  }
  set deviceToken(deviceToken) {
    this._deviceToken = deviceToken;
  }
  get userToken() {
    return this.user.userToken;
  }
  get userId() {
    return this.user.userId;
  }
  set userId(value) {
    this.user.userId = value;
  }
  get userName() {
    return this._user.name;
  }
  set userName(value) {
    this._user.name = value;
  }

  saveUser() {
    const userData = JSON.stringify(this.user);
    saveData('secureUserData', userData).then();
  }

  async secureUserDataGet() {
    return await readData('secureUserData');
  }
  saveDeviceToken() {
    const token = JSON.stringify(this._deviceToken);
    saveData('deviceToken', token).then();
  }

  async getDeviceToken() {
    return await readData('deviceToken');
  }
  set restoreDeviceToken(string: string) {
    this.deviceToken = JSON.parse(string);
  }

  set restoreUserData(string: string) {
    if (string === null) {
      return;
    }
    if (typeof string !== 'undefined' || string !== false) {
      let jsonData = JSON.parse(string);
      this.user.userToken = jsonData.userToken;
      this.user.userId = jsonData.userId;
      this.user.name = jsonData.name;
      this.user.userTheme = jsonData.userTheme;
    }
  }
  async logout() {
    // try {
    //   //const response = await UserDataProvider.userlogout();
    //   // console.log('UserDataProvider', response);
    // } catch (ex) {
    //   console.log('UserDataProvider catch', ex);
    // }
    this._user = {
      userId: null,
      userToken: null,
      name: null,
      userTheme:'default'

    };
    await AsyncStorage.removeItem('secureUserData');
    await AsyncStorage.removeItem('appState');
  }

}

// @ts-ignore
global.__app__ = global.__app__ || {};
// @ts-ignore
global.__app__.currentUser =
  // @ts-ignore
  global.__app__.currentUser || new CurrentUserImpl();

export function currentUser(): CurrentUserImpl {
  // @ts-ignore
  return global.__app__.currentUser;
}
