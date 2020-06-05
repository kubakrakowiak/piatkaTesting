import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
    Platform
} from "react-native";
import React, {useEffect, useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';



function Register({ navigation }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dob, setDob] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setDob(new Date(date));
    };



    return (
        <ScrollView>
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
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Powtórz Hasło'}
                        textAlign={'center'}
                        placeholderTextColor = "#f85b5b"
                        secureTextEntry={true}
                        textContentType='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(password)=>setPassword({password})}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Imię'}
                        textAlign={'center'}
                        placeholderTextColor = "#f85b5b"
                        secureTextEntry={true}
                        textContentType='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(password)=>setPassword({password})}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Nazwisko'}
                        textAlign={'center'}
                        placeholderTextColor = "#f85b5b"
                        secureTextEntry={true}
                        textContentType='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(password)=>setPassword({password})}
                    />
                    <TouchableOpacity onPress={showDatePicker}>
                        <View style={styles.inputDate}>
                            <Text style={styles.dobButtonText}>{dob ? (dob.getDay() + "-" + dob.getMonth() + "-" + dob.getFullYear()) : ('Data Urodzeniaa')}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.error}>Podane hasło lub adres email jest nieprawidłowy.</Text>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('Register')}>
                        <Text>Zarejestruj się</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </ScrollView>

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
    inputDate:{
        height: 41,
        width: 256,
        backgroundColor: '#f8e2e2ff',
        borderRadius: 12,
        marginBottom: 13,
        alignItems: 'center',
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
    dobButtonText:{
        color: '#f85b5b',
    },
});

export default Register;
