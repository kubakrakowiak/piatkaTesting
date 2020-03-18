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



function Map({ navigation: { navigate, dispatch } }) {
    return (
        <View style={styles.container}>
            <Text>Map Page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default Map;
