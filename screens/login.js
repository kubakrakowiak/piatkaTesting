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
import { AuthContext } from "../context";
import { StackActions } from '@react-navigation/native';
import * as firebase from 'firebase';





function LoginScreen({navigation}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [check, setCheck] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { signIn } = React.useContext(AuthContext);
    async function setData(){
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
    };

    async function retrieveData() {
        await AsyncStorage.getItem("email").then((email) => {
            setEmail(email)
        });
        await AsyncStorage.getItem("password").then((password) => {
            setPassword(password)
            if (password != null || password != null){
                setCheck('1')
            }
        });
    }




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
                    onChangeText={(email)=>setEmail({email})}
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
                <TouchableOpacity style={styles.loginButton} onPress={() => signIn({email, password})}>
                    <Text style={styles.loginButtonText}>Zaloguj Się</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('Register')}>
                    <Text style={styles.loginButtonText}>Zarejestruj się</Text>
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
