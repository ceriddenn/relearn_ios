import "../global.css";
import { Slot, useRouter, useSegments } from "expo-router";
import { useContext, useEffect } from "react";
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
import { AuthContext, AuthProvider } from "@/context/AuthContext";

function InitialLayout() {
  const segments = useSegments();
  const router = useRouter();
  const { jwtToken, loading, user, passedPreflight, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (loading) return;
    const inTabsGroup = segments[0] === '(auth)';

    console.log('JWT changed: ', jwtToken);
    if (jwtToken && !inTabsGroup) {
      if (!passedPreflight.passed) return router.replace("verificationChecks");
      if (!user.signupComplete) return router.replace("/completeSignup");
      router.replace('/home');
    } else if (!jwtToken) {
      router.replace('/signUp');
    }

  }, [jwtToken, loading, passedPreflight, user]);

  return (
    <>
      {loading ? <Text>loading</Text> : (
        <Slot />
      )}

      <View className={'fixed bottom-0 mt-auto mx-auto'}>
        <Text className="text-gray-600 text-sm" onPress={() => signOut()}>Built with ❤️ by Finn in SC🏖️</Text>
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
    <AuthProvider>
      <SafeAreaView className="bg-black">
        <InitialLayout />
        <Toast config={toastConfig} />
      </SafeAreaView>
    </AuthProvider>
  )
}
