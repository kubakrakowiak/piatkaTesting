import React, { Component, useState } from 'react';
import {  StyleSheet, TextInput, View, ScrollView, KeyboardAvoidingView, Text, ImageBackground, ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Image } from 'react-native-elements';
import {render} from "react-native-web";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class Person extends Component {
    render() {
        return (
            <View>
                <Text>Hello, </Text>
            </View>
        );
    }
}
