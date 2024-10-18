import React from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { Apple, AppleIcon, ChevronLeft, LockKeyholeIcon, MailIcon, PhoneIcon } from 'lucide-react-native';
import { Input } from '../../components/input'
import { Checkbox } from '@/components/checkbox';
import { useRouter } from 'expo-router';
const SignIn = () => {
    const [checked, setChecked] = React.useState(false);
    const router = useRouter()

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View className='flex h-screen bg-black'>
                <View className='flex px-6 w-full'>

                    <View className='flex flex-col space-y-3 mt-24'>
                        <Text className='font-medium text-4xl text-white'>Sign in ✨</Text>
                        <Text className='text-xl text-gray-400'>Welcome back! Please login.</Text>

                    </View>
                    <View className='flex mt-6 gap-6'>
                        <View className='flex gap-2'>
                            <Text className='font-semibold text-md text-white'>Email</Text>

                            <View className="flex-row items-center px-4 py-1 border-[1.5px] border-gray-600 rounded-lg gap-3 ">
                                <MailIcon color="#4b5563" size={25} />
                                <Input
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
                                    placeholder='********'
                                    secureTextEntry={true}
                                    className='w-full pr-12'
                                />
                            </View>

                        </View>
                    </View>
                    <View className='flex flex-row justify-between mt-5'>
                        <View className='flex flex-row gap-2 items-center'>
                            <Checkbox checked={checked} onCheckedChange={setChecked} className='text-white' />
                            <Text className='font-medium text-md text-gray-400'>I accept the TOS</Text>
                        </View>
                        <Text className='font-medium text-md text-blue-600 '>Forgot password</Text>

                    </View>
                    <View className='mt-12'>
                        <Pressable className='border-[1.5px] rounded-lg bg-[#9d4edd] border-[#9d4edd] items-center py-2'>
                            <Text className='text-white font-medium text-lg'>Sign In</Text>
                        </Pressable>
                    </View>

                    <View className='mt-4'>
                        <Text className='text-gray-600 font-medium text-md'>--------------- Or log in with ---------------</Text>
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
                        <Text className='text-xl text-gray-400'>Don't have an account?&nbsp;</Text>
                        <Text className='text-xl text-blue-600' onPress={() => router.push('/signUp')}>Sign Up</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignIn