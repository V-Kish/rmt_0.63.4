import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 *  @param {string} name Name of the data you want to store
 *  @param {string|object} value Data that you want to store
 *  @return {null|error} Promise returns nothing if success and error in case of failure
 */

export const saveData = async (name: string, value: string) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    throw e;
  }
};
