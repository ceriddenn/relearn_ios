import "../global.css";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import Toast from 'react-native-toast-message';
import { toastConfig } from "@/lib/toastConfig";

function InitialLayout() {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    router.replace('/signUp')
    // if (!isLoaded) return;

    // const inTabsGroup = segments[0] === '(auth)';

    // console.log('User changed: ', isSignedIn);

    // if (isSignedIn && !inTabsGroup) {
    //   router.replace('/home');
    // } else if (!isSignedIn) {
    //   router.replace('/signUp');
    // }
  }, []);

  return (
    <>
      <Slot />
      <View className={'fixed bottom-0 mt-auto mx-auto'}>
        <Text className="text-gray-600 text-sm">Built with ❤️ by Finn in SC🏖️</Text>
        <Text className="text-gray-600 text-xs text-center">v1.0.2-R4-4</Text>
      </View>
    </>
  )
}


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Thin': Poppins_100Thin,
    'Poppins-ExtraLight': Poppins_200ExtraLight,
    'Poppins-Light': Poppins_300Light,
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-ExtraBold': Poppins_800ExtraBold,
    'Poppins-Black': Poppins_900Black,
  });
  return (
    <SafeAreaView className="bg-black">
      <InitialLayout />
      <Toast config={toastConfig} />
    </SafeAreaView>
  )
}
