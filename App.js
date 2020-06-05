import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView, ScrollView, BackHandler,
    ActivityIndicator
} from 'react-native';
import {Video} from 'expo-av';
import * as firebase from 'firebase';
import Login from './screens/login';
import EventList from './screens/eventList';
import Profile from './screens/profile';
import Map from './screens/map';
import Register from './screens/register';
import { NavigationContainer, StackActions, CommonActions  } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { AuthContext } from "./context";

const firebaseConfig = {
    apiKey: "AIzaSyD7-Fa7AQ1spZQ7JDlvnWEUIBgwq5ExEds",
    authDomain: "piatkatesty.firebaseapp.com",
    databaseURL: "https://piatkatesty.firebaseio.com",
    projectId: "piatkatesty",
    storageBucket: "piatkatesty.appspot.com",
};

if (!firebase.apps.length) {
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
}

const Tabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={EventList}/>
    </HomeStack.Navigator>
)

const TabsMainScreen = () =>(
    <Tabs.Navigator
        activeColor="#3e2465"
        inactiveColor="#8366ae"
        barStyle={{ backgroundColor: '#f1eded' }}
    >
        <Tabs.Screen name="Home"
                    component={Map}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="map" color={color} size={26} />
                        ),
                    }}
        />
        <Tabs.Screen name="Login"
                    component={EventList}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cup" color={color} size={26} />
                        ),
                    }}
        />
        <Tabs.Screen name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-box-outline" color={color} size={26} />
                        ),
                    }}
        />
    </Tabs.Navigator>
);

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [autoLogin, setAutoLogin] = React.useState(true);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const authContext = React.useMemo(() => {
        return{
            signIn: (userData) => {
                if (userData.email.email && userData.password.password){
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(userData.email.email, userData.password.password)
                        .then(() => setUserToken(firebase.auth().currentUser.uid))
                        .then(() => setIsLoading(false))
                        .then(() => setAutoLogin(false))
                        .then(() => setData(userData))
                        .catch(error => console.log({ errorMessage: error.message }))
                }
            },
            autoSignIn: (userData) => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(userData.email, userData.password)
                    .then(() => setUserToken(firebase.auth().currentUser.uid))
                    .then(() => setIsLoading(false))
                    .then(() => setAutoLogin(false))
                    .catch(error => console.log({ errorMessage: error.message }))
            },
            signUp: () => {
                setIsLoading(false);
                setUserToken('aaa');
            },
            logout: () => {
                setIsLoading(false)
                setUserToken(null)
                setAutoLogin(false)
            }
        }
    },[]);

    async function setData(userData){
        await AsyncStorage.setItem('email', userData.email.email);
        await AsyncStorage.setItem('password', userData.password.password);
    };

    async function retrieveData() {
        await AsyncStorage.getItem("email").then((email) => {
            setEmail(email)
        });
        await AsyncStorage.getItem("password").then((password) => {
            setPassword(password)
        });
        if (password && email){
            authContext.autoSignIn({email, password})
        }
        else {
            setIsLoading(false)
            setAutoLogin(false)
        }
    }
    if (autoLogin && isLoading){
        retrieveData()
        return( <ActivityIndicator/>)
    }

    return(

        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken ? (
                    <TabsMainScreen/>
                ) : (
                    <AuthStack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <AuthStack.Screen name="SingIn" component ={Login}/>
                        <AuthStack.Screen name="Register" component ={Register}/>
                    </AuthStack.Navigator>
                )}

            </NavigationContainer>
        </AuthContext.Provider>
        )
}











const styles = StyleSheet.create({

});
