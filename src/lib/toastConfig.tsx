import { Text, View } from 'react-native';
import Toast, { BaseToast, ErrorToast, ToastType } from 'react-native-toast-message';

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#9d4edd', backgroundColor: '#111827' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: '300',
        color: '#9ca3af'
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#ef4444', backgroundColor: '#111827' }}

      text1Style={{
        fontSize: 18,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: '300',
        color: '#9ca3af'
      }}
    />
  ),
};

const showToast = (title: string, desc: string, type?: ToastType) => {
  Toast.show({
    type: !type ? "success" : type,
    text1: title,
    text2: desc
  });
}


export { toastConfig, showToast }