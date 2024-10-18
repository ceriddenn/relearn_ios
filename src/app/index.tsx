import { ActivityIndicator, View } from 'react-native';

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }} className='bg-black'>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default StartPage;