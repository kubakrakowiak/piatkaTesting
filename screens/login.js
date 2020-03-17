import React, {useEffect, useState} from "react";
import {
    AsyncStorage,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    BackHandler
} from "react-native";
import { StackActions } from '@react-navigation/native';




function LoginScreen({ navigation: { navigate } }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState('');
    async function setData(){
        await AsyncStorage.setItem('email', 'id1');
        await AsyncStorage.setItem('password', 'id1');
    };

    async function retrieveData() {
        await AsyncStorage.getItem("email").then((email) => {
            setEmail(email)
        });
        await AsyncStorage.getItem("password").then((password) => {
            setPassword(password)
            if (password !== '' || password != null){
                setCheck('1')
            }
        });
    }








    retrieveData();

    function tryLogin(){
        console.log(password);
    };


    useEffect(() => {

        if(email != '1'){
            tryLogin();
        }
    }, [check]);

    return (
        <View style={styles.loginMainContainer}>
            <KeyboardAvoidingView behavior={"padding"}
                                  keyboardVerticalOffset={
                                      Platform.select({
                                          ios: () => 60,
                                          android: () => 110
                                      })()
                                  }
                                  style={styles.container}
            >
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <TextInput
                    style={styles.inputText}
                    placeholder={'Email'}
                    textAlign={'center'}
                    placeholderTextColor = "#f85b5b"
                    textContentType='emailAddress'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(password)=>setEmail({password})}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={'Hasło'}
                    textAlign={'center'}
                    placeholderTextColor = "#f85b5b"
                    secureTextEntry={true}
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(password)=>setPassword({password})}
                />
                <Text style={styles.error}>Podane hasło lub adres email jest nieprawidłowy.</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigate('Home')}>
                    <Text style={styles.loginButtonText}>Zaloguj Się</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    loginMainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    logo:{
        marginBottom: 72,
    },
    container:{
        alignItems: 'center',
    },
    inputText:{
        height: 41,
        width: 256,
        backgroundColor: '#f8e2e2ff',
        borderRadius: 12,
        marginBottom: 23,
    },
    error:{
        color: '#f85b5b',
    },
    loginButton:{
        marginTop: 30,
        backgroundColor: '#f85b5b',
        borderRadius: 12,
        height: 44,
        width: 162,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText:{
        color: '#fff',
    },
});


export default LoginScreen;
