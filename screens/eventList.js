import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import { CommonActions  } from '@react-navigation/native';



function EventList({ navigation: { navigate, dispatch } }) {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
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
                        <Text>Data: w tym miesiącu</Text>
                        <Text>Wiek: +18 lat</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView style={styles.eventListContainer}>
                    <View style={styles.orgWydContainer}>
                        <View>
                            <Text style={styles.paddingLeft}>Organizator</Text>
                        </View>
                        <View>
                            <Text style={styles.paddingLeft}>Wydarzenie</Text>
                        </View>

                    </View>
                    <TouchableOpacity>
                    <View style={styles.eventListEventsContainer}>
                        <Image source={require('../assets/hpclogo.png')} style={styles.logoProperties}/>
                        <View style={styles.eventListEventInfoContainer}>
                            <View>
                                <Text style={styles.textProp}>Połowinki II LO Gdańsk</Text>
                                <Text style={styles.textProp}>Cena Biletu: od 30zł</Text>
                                <Text style={styles.textProp}>Miejsce: Zdarta Płytwa 33.5 Gdańsk</Text>
                                <Text style={styles.textProp}>Zainteresowanych</Text>
                            </View>
                            <View style={styles.TextContent}>
                                    <Text style={styles.eighteen}>18+</Text>
                                </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.eventListEventsContainer}>
                            <Image source={require('../assets/hpclogo.png')} style={styles.logoProperties}/>
                            <View style={styles.eventListEventInfoContainer}>
                                <View>
                                    <Text style={styles.textProp}>Połowinki II LO Gdańsk</Text>
                                    <Text style={styles.textProp}>Cena Biletu: od 30zł</Text>
                                    <Text style={styles.textProp}>Miejsce: Zdarta Płytwa 33.5 Gdańsk</Text>
                                    <Text style={styles.textProp}>Zainteresowanych</Text>
                                </View>
                                <View style={styles.TextContent}>
                                    <Text style={styles.eighteen}>18+</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.eventListEventsContainer}>
                            <Image source={require('../assets/hpclogo.png')} style={styles.logoProperties}/>
                            <View style={styles.eventListEventInfoContainer}>
                                <View style={styles.InformationsContent}>
                                    <Text style={styles.textProp}>Połowinki II LO Gdańsk</Text>
                                    <Text style={styles.textProp}>Cena Biletu: od 30zł</Text>
                                    <Text style={styles.textProp}>Miejsce: Zdarta Płytwa 33.5 Gdańsk</Text>
                                    <Text style={styles.textProp}>Zainteresowanych</Text>
                                </View>
                                <View style={styles.TextContent}>
                                    <Text style={styles.eighteen}>18+</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.eventListEventsContainer}>
                            <Image source={require('../assets/hpclogo.png')} style={styles.logoProperties}/>
                            <View style={styles.eventListEventInfoContainer}>
                                <View>
                                    <Text style={styles.textProp}>Połowinki II LO Gdańsk</Text>
                                    <Text style={styles.textProp}>Cena Biletu: od 30zł</Text>
                                    <Text style={styles.textProp}>Miejsce: Zdarta Płytwa 33.5 Gdańsk</Text>
                                    <Text style={styles.textProp}>Zainteresowanych</Text>
                                </View>
                                <View style={styles.TextContent}>
                                    <Text style={styles.eighteen}>18+</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
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
    eventListEventInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    eighteen: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#963636",

    },
    TextContent: {
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    textProp:{
        fontSize: 10,
    },
    eventListEventsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    contentContainer:{
        flex: 3.5,
        alignItems: 'center',

    },
    logoProperties: {
        width: 80,
        height: 80,
        borderRadius: 10,
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
    paddingLeft: {
        paddingLeft: '10%',
        fontSize: 10,
    },
    inputText:{
        height: 41,
        width: 256,
        backgroundColor: '#e0e0e0',
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

    orgWydContainer: {
        marginTop: 12,
        width: 353,
        height: 24,
        flexDirection: 'row',
    },

    sortText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sortAge:{
        flexDirection: 'row',
    },
    eventListContainer:{
        borderRadius: 12,
        backgroundColor: '#e0e0e0',
    },
});

export default EventList;
