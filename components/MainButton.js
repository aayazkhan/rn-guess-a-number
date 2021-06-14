import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

import Colors from "../constants/colors";
import Font from "../constants/Font";

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View styles={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontFamily: Font.OpenSans,
        fontSize: 18,
    }
});

export default MainButton;