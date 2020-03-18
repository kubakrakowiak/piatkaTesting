import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React from "react";
import { CommonActions  } from '@react-navigation/native';



function Profile({ navigation: { navigate, dispatch } }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon2.png')} style={styles.logo}/>
            <View style={styles.profileContent}>
                <View style={styles.textContent}>
                <Text style={styles.textContentText}>Kacper</Text>
                </View>
                <View style={styles.textContent}>
                <Text style={styles.textContentText}>23 styczeń 2000</Text>
                </View>
                <View style={styles.textContent}>
                <Text style={styles.textContentText}>Gdynia</Text>
                </View>


                <TouchableOpacity style={styles.textContent2}>
                    <Text style={styles.textContent2Text}>Polubione wydarzenia</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        marginBottom: '6%',
        height: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContent: {
        backgroundColor: '#e6e6e6',
        padding: 40,
        borderRadius: 30,
    },
    textContent: {
        backgroundColor: 'white',
        marginTop: 15,
        fontSize: 15,
        borderRadius: 10,
        paddingHorizontal: '25%',
        paddingVertical: '5%',
    },
    textContentText: {
      textAlign: 'center',
    },
    textContent2:{
        backgroundColor: '#F85B5B',
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: '5%',
    },
    textContent2Text: {
        color: "#fff",
        textAlign: 'center',
    },

});

export default Profile;
