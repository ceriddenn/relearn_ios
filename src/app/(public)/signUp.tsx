import React from 'react'
import { ActivityIndicator, Image, Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native'
import { LockKeyholeIcon, MailIcon, PhoneIcon } from 'lucide-react-native';
import { Input } from '../../components/input'
import { Checkbox } from '@/components/checkbox';
import { useSignUp } from '@clerk/clerk-expo'
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from 'expo-router';
import { showToast } from '@/lib/toastConfig';
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'

const SignUp = () => {
    // sign up state
    const [loading, setLoading] = React.useState<boolean>(false);
    const [tos, setTos] = React.useState<boolean>(false);
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    // view state
    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')

    // other state
    const router = useRouter();





    const onSignupPress = async () => {

    };

    const onPressVerify = async () => {

    };

    return (
        <>
            {loading && (
                <View className='flex h-screen bg-black items-center w-full justify-center'>
                    <ActivityIndicator size="large" color="#9d4edd" />

                </View>
            )}
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View className='flex h-screen bg-black'>
                    {!pendingVerification && (
                        <View className='flex px-6 w-full'>

                            <View className='flex flex-col space-y-3 mt-24'>
                                <Text className='font-medium text-4xl text-white'>Sign Up ✨</Text>
                                <Text className='text-xl text-gray-400'>To get started, create an account.</Text>

                            </View>
                            <View className='flex mt-6 gap-6'>
                                <View className='flex gap-2'>
                                    <Text className='font-semibold text-md text-white'>Name</Text>

                                    <View className="flex-row items-center px-4 py-1 border-[1.5px] border-gray-600 rounded-lg gap-3 ">
                                        <MailIcon color="#4b5563" size={25} />
                                        <Input
                                            placeholder='Enter your name'
                                            className='w-full pr-12'
                                        />
                                    </View>

                                </View>
                                <View className='flex gap-2'>
                                    <Text className='font-semibold text-md text-white'>Email</Text>

                                    <View className="flex-row items-center px-4 py-1 border-[1.5px] border-gray-600 rounded-lg gap-3 ">
                                        <MailIcon color="#4b5563" size={25} />
                                        <Input
                                            onChangeText={(v) => setEmail(v)}
                                            placeholder='Enter your email'
                                            className='w-full pr-12'
                                        />
                                    </View>

                                </View>
                                <View className='flex gap-2'>
                                    <Text className='font-semibold text-md text-white'>Password</Text>

                                    <View className="flex-row items-center px-4 py-1 border-[1.5px] border-gray-600 rounded-lg gap-3 ">
                                        <LockKeyholeIcon color="#4b5563" size={25} />
                                        <Input
                                            onChangeText={(v) => setPassword(v)}
                                            placeholder='********'
                                            secureTextEntry={true}
                                            className='w-full pr-12'
                                        />
                                    </View>

                                </View>
                            </View>
                            <View className='flex flex-row justify-between mt-5'>
                                <View className='flex flex-row gap-2 items-center'>
                                    <Checkbox checked={tos} onCheckedChange={setTos} className='text-white' />
                                    <Text className='font-medium text-md text-gray-400'>I accept the TOS</Text>
                                </View>
                                {/*<Text className='font-medium text-md text-blue-600 '>Forgot password</Text>*/}

                            </View>
                            <View className='mt-12'>
                                <Pressable
                                    onPress={onSignupPress}
                                    className='border-[1.5px] rounded-lg bg-[#9d4edd] border-[#9d4edd] items-center py-2'>
                                    <Text className='text-white font-medium text-lg'>Sign Up</Text>
                                </Pressable>
                            </View>

                            <View className='mt-4'>
                                <Text className='text-gray-600 font-medium text-md'>-------------- Or sign up with --------------</Text>
                            </View>

                            <View className='flex flex-row mt-4 justify-evenly items-center'>
                                <Pressable className='rounded-lg bg-gray-900 shadow-sm py-3 px-3'>
                                    <PhoneIcon color={'white'} width={30} height={30} />
                                </Pressable>
                                <Pressable className='rounded-lg bg-gray-900 shadow-sm py-3 px-3'>
                                    <Image source={require('assets/images/google1.png')} className='w-9 h-9' />
                                </Pressable>
                                <Pressable className='rounded-lg bg-gray-900 shadow-sm py-3 px-3'>
                                    <Image source={require('assets/images/snap1.png')} className='w-9 h-9' />
                                </Pressable>
                            </View>

                            <View className='flex mt-12 mx-auto flex flex-row'>
                                <Text className='text-xl text-gray-400'>Already have an account?&nbsp;</Text>
                                <Text className='text-xl text-blue-600' onPress={() => router.push('/signIn')}>Sign In</Text>
                            </View>
                        </View>)}

                    {pendingVerification && (
                        <View className='flex px-6 w-full'>

                            <View className='flex flex-col space-y-3 mt-24'>
                                <Text className='font-medium text-4xl text-white'>Verify Email</Text>
                                <Text className='text-xl text-gray-400'>To continue, enter the code .</Text>

                            </View>
                            <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)}
                                focusColor={'#9d4edd'}
                                theme={{ containerStyle: { marginTop: 24, justifyContent: "space-around", gap: 0 }, pinCodeTextStyle: { color: "white" } }} />

                            <Pressable
                                onPress={onPressVerify}
                                className='mt-8 border-[1.5px] rounded-lg bg-[#9d4edd] border-[#9d4edd] items-center py-2'>
                                <Text className='text-white font-medium text-lg'>Verify</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default SignUp