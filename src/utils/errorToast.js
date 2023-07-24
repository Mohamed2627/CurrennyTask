import Toast from 'react-native-simple-toast';

export const setError = errorMessage => {
  return Toast.showWithGravity(errorMessage, Toast.SHORT, Toast.TOP);
};
