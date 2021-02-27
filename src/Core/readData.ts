import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async (name: string) => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (e) {
    // error reading value
  }
};
