import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react';

import Styles from './Styles'

const image = (require('../../assets/Images/doctor.jpg'))

const Home = ({ navigation }) => {

    const gotoLogin = () => {
        return navigation.navigate("Login")
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={image} style={Styles.background} resizeMode='cover'>

                <View style={{ marginTop: -290, marginHorizontal: 20, }}>
                    <View style={{width: 180,}}>
                        <Text style={Styles.title}>Would you like to talk to a Doctor?</Text>
                    </View>
                    <Pressable style={Styles.pressable} onPress={gotoLogin}>
                        <Text style={Styles.pressableText}>Yes, Please.</Text>
                    </Pressable>
                </View>

            </ImageBackground>

        </View>
    )
}

export default Home