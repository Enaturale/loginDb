import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

import Styles from './Styles'

import {useNavigation} from "@react-navigation/native"

import Axios from 'axios';
import Eye from "@expo/vector-icons/Ionicons";


const Signup = () => {

    const navigation = useNavigation();

    function gotoLogin() {
        return navigation.navigate('Login')
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)


    const SignUpUser = async() =>{
        try {
            // console.log("email => ", email);
            // console.log("password => ", password);

            // const {data} = await Axios.post("http://192.168.100.27/LoginReactNative/api/SignUp.php", {
            //     email: email,
            //     password: password,
            //     confirmPassword: conPassword,
            // });
            const CheckEmail =  RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

        if((email.length == 0 || (password.length == 0) )){
            alert("Required Field(s) is Missing.");
        }
        else if(!(CheckEmail).test(email)){
            alert("Invalid email, please!")
        }
        //password validations
        else if(password.length < 8){
            alert("Enter a miinmum of 8 characters please.");
        }
        else if(!(((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password)))){
            alert("Use at least one special character");
        }
        else if(((/[ ]/).test(password))){
            alert("You password should not include space")
        }
        else{
            const {data} = await Axios.post("http://192.168.100.27/LoginReactNative/api/SignUp.php", {
                email: email,
                password: password,
                // confirmPassword: conPassword,
            });
            console.log(data)
            alert("User Created Successfully");
            
            // if(data.status == 'success'){
            //     alert("User Created Successfully");

            // }
            // else{
            //     alert("User not created");

            // }
        }
        

            // if (data.status =='success') {
            //     alert("User created sucessfully");
            // } else {
            //     alert("User not Created");
            // }

            

        } catch (err) {
            console.log(err)

        }
        // const Email = email;
        // const Password = password;
        // const ConfirmPw = conPassword;

        // const CheckEmail =  RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

        // if((Email.length == 0 || (Password.length == 0) || (ConfirmPw.length == 0))){
        //     alert("Required Field(s) is Missing.");
        // }
        // else if(!(CheckEmail).test(Email)){
        //     alert("Invalid email, please!")
        // }
        // //password validations
        // else if(Password.length < 8){
        //     alert("Enter a miinmum of 8 characters please.");
        // }
        // else if(!(((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password)))){
        //     alert("Use at least one special character");
        // }
        // else if(((/[ ]/).test(Password))){
        //     alert("You password should not include space")
        // }
        // else if(Password !== ConfirmPw){
        //     alert("Password does not match!!!")
        // }

        // else{
        //     const InsertAPIURL = "https://192.168.100.27/LoginReactNative/api/SignUp.php";

        //     const Data ={
        //         UserEmail: Email,
        //         UserPassword: Password,
        //         ConfirmPassword : ConfirmPw,
        //     };

        //     const headers ={
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }

        //     //fecthing function
        //     fetch(InsertAPIURL,{
        //         method:'POST',
        //         headers:headers,
        //         body: JSON.stringify(Data) //convert data to JSON
        //     })
        //     .then((response)=>{
        //         response.json();
        //         navigation.navigate("Login");
        //     }) 
        //     .catch((error)=>{
        //         alert("Error Occured" + error);
        //     })
        // }
        
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

            <View style={{flexDirection:'row'}}>
                <TextInput 
                    placeholder=' Passsword'  
                    style={Styles.textInput} 
                    onChangeText={text => setPassword(text)}
                    // secureTextEntry={setSecureTextEntry ? true : false}
                    secureTextEntry={!isPasswordVisible}

                />

                {/* place a button for see password */}
                <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Eye
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={20}
                    />
                </Pressable>
            </View>
{/* 
            <View style={{flexDirection:'row'}}>
                <TextInput 
                    placeholder=' Confirm Passsword'  
                    style={Styles.textInput} 
                    onChangeText={text => setConPassword(text)}
                    secureTextEntry={!isPasswordVisible}

                    // secureTextEntry={setConfirmSecureTextEntry ? true : false}

                />

                {/* place a button for see password */}
                {/* <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Eye
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={20}
                    />
                </Pressable>
            </View> */} 

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