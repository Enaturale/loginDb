import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

import Styles from './Styles'

import { useNavigation } from "@react-navigation/native"

import Axios from 'axios';

import Eye from "@expo/vector-icons/Ionicons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const navigation = useNavigation();

    function gotoSignup() {
        return navigation.navigate('Signup')
    }

    const loginUser = async () => {
        try {
            // console.log("email => ", email);
            // console.log("password => ", password);

            const {data} = await Axios.post("http://192.168.100.27/LoginReactNative/api/Login.php", {
                email: email,
                password: password,
            });

            alert("User Found. Please, proceed.")

            console.log(data)

        } catch (err) {
            console.log(err)

        }
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Login</Text>

            <View style={{ marginTop: 20, }}>
                <TextInput
                    placeholder=' Email'
                    style={Styles.textInput}
                    onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={{ flexDirection: 'row', }}>
                <TextInput
                    placeholder=' Passsword'
                    style={Styles.textInput}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={(text) => setPassword(text)} />

                {/* place a button for see password */}
                <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Eye
                        name={isPasswordVisible ? "eye-off" : "eye"}
                        size={20}
                    />
                </Pressable>

            </View>

            <View style={{ width: '100%', justifyContent: "center", alignItems: 'center', marginVertical: 20 }}>
                <Pressable style={Styles.pressable} onPress={loginUser}>
                    <Text style={Styles.pressableText}>Login</Text>
                </Pressable>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 30, }}>
                <Text style={{ fontSize: 20, }}>Don't have an account?</Text>
                <Pressable onPress={gotoSignup}>
                    <Text style={{ color: '#01579B', fontSize: 25, fontWeight:'bold' }}>Signup</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Login