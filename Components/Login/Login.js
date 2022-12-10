import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

import Styles from './Styles'

import {useNavigation} from "@react-navigation/native"

const Login = () => {
    const navigation = useNavigation();
    
    function gotoSignup() {
        return navigation.navigate('Signup')
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Login</Text>            

            <View style={{marginTop: 20,}}>
                <TextInput placeholder=' Email' style={Styles.textInput}  />
            </View>

            <View>
                <TextInput placeholder=' Passsword'  style={Styles.textInput} />
            </View>

            <View style={{width: '100%', justifyContent:"center", alignItems:'center', marginVertical: 20 }}>
                <Pressable style={Styles.pressable}>
                    <Text style={Styles.pressableText}>Login</Text>
                </Pressable>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 30, }}>
                <Text style={{fontSize: 20,}}>Don't have an account?</Text>
                <Pressable onPress={gotoSignup}>
                    <Text style={{color: '#01579B', fontSize: 20,}}>Signup</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Login