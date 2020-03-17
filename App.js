import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView, ScrollView, BackHandler
} from 'react-native';
import {Video} from 'expo-av';
import * as firebase from 'firebase';
import Login from './screens/login';
import EventList from './screens/eventList';
import { NavigationContainer, StackActions, CommonActions  } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


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

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App(){
    createHomeStackNavigator = () =>
        <Stack.Navigator screenOptions={{
                            headerShown: false
        }} swipeEnabled='false'>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
                children={createHomeTabNavigator}
            />
        </Stack.Navigator>

    createHomeTabNavigator = () =>
        <Tab.Navigator
                           activeColor="#3e2465"
                           inactiveColor="#8366ae"
                           barStyle={{ backgroundColor: '#f1eded' }}
            >
                <Tab.Screen name="Home"
                            component={EventList}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="map" color={color} size={26} />
                                    ),
                            }}
                />
                <Tab.Screen name="Login"
                            component={Login}
                            options={{
                                tabBarLabel: 'Updates',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="cup" color={color} size={26} />
                                    ),
                            }}
                />
                <Tab.Screen name="Logi1n"
                            component={Login}
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account-box-outline" color={color} size={26} />
                                    ),
                            }}
                />
            </Tab.Navigator>
    return(
        <NavigationContainer>
            {createHomeStackNavigator()}
        </NavigationContainer>
    )
}




function NotificationsScreeen() {

    return (
        <Login/>
    )
}







const styles = StyleSheet.create({

});
