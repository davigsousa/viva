import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@User-Token';
export const USER_KEY = '@Logged-User';

export const login = async (token, user) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const isSignedIn = async () => (await AsyncStorage.getItem(TOKEN_KEY)) !== null;

export const setToken = async (token) => AsyncStorage.setItem(TOKEN_KEY, token);

export const getToken = async () => AsyncStorage.getItem(TOKEN_KEY);

export const getUser = async () => JSON.parse(await AsyncStorage.getItem(USER_KEY));

export const isSeller = async () => (await getUser()).shop_pass;

export const logout = async () => {
  await AsyncStorage.clear();
};
