import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

import Styles from './Styles'

const Login = ({ navigation }) => {
    function gotoSignup() {
        return navigation.navigate('Signup')
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Login</Text>            

            <View>
                <TextInput placeholder=' Email' style={Styles.textInput}  />
            </View>

            <View>
                <TextInput placeholder=' Passsword'  style={Styles.textInput} />
            </View>

            <View>
                <Pressable>
                    <Text>Login</Text>
                </Pressable>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text>Don't have an account?</Text>
                <Pressable>
                    <Text>Signup</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Login