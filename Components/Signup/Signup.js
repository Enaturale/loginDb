import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

import Styles from './Styles'

import {useNavigation} from "@react-navigation/native"

import Axios from 'axios';

const Signup = () => {

    const navigation = useNavigation();

    function gotoLogin() {
        return navigation.navigate('Login')
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

    const SignUpUser = () =>{
        const Email = email;
        const Password = password;
        const ConfirmPw = conPassword;

        const CheckEmail =  RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

        if((Email.length == 0 || (Password.length == 0) || (ConfirmPw.length == 0))){
            alert("Required Field(s) is Missing.");
        }
        else if(!(CheckEmail).test(Email)){
            alert("Invalid email, please!")
        }
        //password validations
        else if(Password.length < 8){
            alert("Enter a miinmum of 8 characters please.");
        }
        else if(!(((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password)))){
            alert("Use at least one special character");
        }
        else if(((/[ ]/).test(Password))){
            alert("You password should not include space")
        }
        else if(Password !== ConfirmPw){
            alert("Password does not match!!!")
        }

        else{
            const InsertAPIURL = "https://127.0.0.1/LoginReactNative/api/SignUp.php";

            const Data ={
                Email: Email,
                Password: Password,
                ConfirmPw : ConfirmPw,
            };

            const headers ={
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

            //fecthing function
            fetch(InsertAPIURL,{
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data) //convert data to JSON
            })
            .then((response)=>response.json()) 
            .then((response)=>{
              alert(response[0].Message);       // If data is in JSON => Display alert msg
              navigation.navigate("Login"); //Navigate to next screen if authentications are valid
            })
            .catch((error)=>{
                alert("Error Occured" + error);
            })
        }
        
    }

    function updateSecureTextEntry(){

    }




    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Signup</Text>            

            <View style={{marginTop: 20,}}>
                <TextInput 
                    placeholder=' Email' 
                    style={Styles.textInput}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View>
                <TextInput 
                    placeholder=' Passsword'  
                    style={Styles.textInput} 
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={setSecureTextEntry ? true : false}
                />
            </View>

            <View>
                <TextInput 
                    placeholder=' Confirm Passsword'  
                    style={Styles.textInput} 
                    onChangeText={text => setConPassword(text)}
                    secureTextEntry={setConfirmSecureTextEntry ? true : false}

                />
            </View>

            <View style={{width: '100%', justifyContent:"center", alignItems:'center', marginVertical: 20 }}>
                <Pressable style={Styles.pressable} onPress={SignUpUser}>
                    <Text style={Styles.pressableText}>Signup</Text>
                </Pressable>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 30, }}>
                <Text style={{fontSize: 20,}}>Already have an account?</Text>
                <Pressable onPress={gotoLogin}>
                    <Text style={{color: '#01579B', fontSize: 20,}}>Login</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Signup