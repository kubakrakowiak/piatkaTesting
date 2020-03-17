import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import { CommonActions  } from '@react-navigation/native';



function EventList({ navigation: { navigate, dispatch } }) {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <Text style={styles.headerText}>Wydarzenia</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder={'Szukaj...'}
                    textAlign={'center'}
                    placeholderTextColor = "#f85b5b"
                    textContentType='organizationName'
                    autoCapitalize = 'sentences'
                    autoCorrect={true}
                />
                <TouchableOpacity style={styles.buttonSearch}>
                    <Text style={styles.buttonText}>Filtruj</Text>
                </TouchableOpacity>
                <View style={styles.sortText}>
                    <View style={styles.sortDate}>
                        <Text>Data: </Text>
                        <Text>w tym miesiącu</Text>
                    </View>
                    <View style={styles.sortDate}>
                        <Text>Wiek: </Text>
                        <Text>+18 lat</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView style={styles.eventListContainer}>

                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    headerContainer:{
        flex:2,
        alignItems: 'center',
    },
    contentContainer:{
        marginTop:30,
        flex:4,
        alignItems: 'center',
    },
    logo:{
        height: 32,
        width: 89,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#f85b5b',
        marginTop: 16,
        fontSize: 20,
    },
    inputText:{
        height: 41,
        width: 256,
        backgroundColor: '#f8e2e2',
        borderRadius: 12,
        marginTop: 8,
    },
    buttonSearch:{
        marginTop: 10,
        backgroundColor: '#f85b5b',
        borderRadius: 12,
        height: 44,
        width: 162,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color:'#fff',
    },
    sortText:{
        marginTop: 12,
        width: 353,
        height: 24,
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    sortDate:{
        flexDirection: 'row',

    },
    sortAge:{
        flexDirection: 'row',
    },
    eventListContainer:{
        height: 10,
        width: 344,
        borderRadius: 12,
        backgroundColor: '#fff0f0',
        marginBottom: 10,
    },
});

export default EventList;
