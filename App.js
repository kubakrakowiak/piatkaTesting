import React, { Component, useState } from 'react';
import {  StyleSheet, TextInput, View, ScrollView, KeyboardAvoidingView, Text, ImageBackground, ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Image } from 'react-native-elements';
import {render} from "react-native-web";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Video } from 'expo-av';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDD4IsozO6Oo3OPTmdsxhln5KYFvYBlsjY",
    authDomain: "piatkafirst.firebaseapp.com",
    databaseURL: "https://piatkafirst.firebaseio.com",
    projectId: "piatkafirst",
    storageBucket: "piatkafirst.appspot.com",
};

if (!firebase.apps.length) {
    firebase.initializeApp({firebaseConfig});
}



const getFonts = () => Font.loadAsync({
        'BalooChettan2': require('./assets/fonts/BalooChettan2-Bold.ttf')
    });

function HomeScreen() {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

class NotificationsScreen extends Component{
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Video
                source={ require("./assets/bg.mp4")}
                rate={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.bgVid}
                />
                <Text>Test</Text>

            </View>
        )
    }
}

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: ''
        })
    }

    signUpUser = (email,password) =>{
        try {
            if (this.state.password.length < 6){
                alert("Please enter at least 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
        }
        catch (error) {
            console.log(error.toString())
        }

    }

    loginUser = (email,password) =>{
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
                console.log(user)
            })
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Video
                    source={require("./assets/bg.mp4")}
                    rate={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.bgVid}
                />
                <View style={styles.containerOnVid}>
                    <View style={styles.topMain}>
                        <Image style={styles.logoImg} source={require('./assets/cup.png')}/>
                        <Text style={styles.logoText}>PiatkaApp</Text>
                    </View>
                    <KeyboardAvoidingView behavior={"padding"}
                                          keyboardVerticalOffset={
                                                Platform.select({
                                                    ios: () => 70,
                                                    android: () => 70
                                                })()
                                          }
                                          style={styles.bottomMain}
                    >
                        <View style={styles.loginInput}>
                            <TextInput style={{margin: 10, fontSize: 20}}
                                       placeholder='Email'
                                       onChangeText={(email)=>this.setState({email})}
                                       textContentType='emailAddress'
                                       autoCapitalize='none'
                                       autoCorrect={false}
                            />
                        </View>
                        <View style={styles.passwordInput}>
                            <TextInput style={{margin: 10, fontSize: 20}}
                                       placeholder='Password'
                                       onChangeText={(password)=>this.setState({password})}
                                       secureTextEntry={true}
                                       textContentType='password'
                                       autoCapitalize='none'
                                       autoCorrect={false}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={()=>this.loginUser(this.state.email, this.state.password)}>
                                <View style={styles.loginButton}>
                                    <Text>Zaloguj się</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.signUpUser(this.state.email, this.state.password)}>
                                <View style={styles.registerButton}>
                                    <Text>Zarejestruj się</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}


const Drawer = createDrawerNavigator();

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if(fontsLoaded) {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
                    <Drawer.Screen name="Login" component={LoginScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }else{
        return(
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}



const styles = StyleSheet.create({
    containerOnVid:{

    },
    bgVid:{
        width: '100%',
        height: '100%',
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    bg:{
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    topMain:{
        marginTop:50,
        flex: 3,
        flexDirection: 'row-reverse',
    },
    logoText:{
        fontSize: 40,
        fontFamily: 'BalooChettan2',
        marginRight:20,
        color: '#fff',
    },
    logoImg:{
        flex: 1,
        width: 70,
        height: 130,
        resizeMode: 'contain',
        marginRight:40,
    },
    bottomMain:{
        flex: 3,
        //backgroundColor:'#ffffff',
        width: '100%',
        marginBottom: 0,
        alignItems:'center',
    },
    loginInput:{
        width:200,
        margin: 5,
        marginTop: 30,
        height: 50,
        borderColor: '#b66687',
        borderRadius: 50,
        borderWidth: 3,
    },
    passwordInput:{
        width:200,
        margin: 5,
        height: 50,
        borderColor: '#b66687',
        borderRadius: 50,
        borderWidth: 3,
    },
    loginButton:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#133233',
        borderRadius: 30,
        height: 50,
        width: 130,
    },
    registerButton:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#2f4f64',
        borderRadius: 30,
        height: 50,
        width: 130,
    },
    buttonContainer:{
        flexDirection: ('row'),
    }
});
