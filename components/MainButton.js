import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";
import Font from "../constants/Font";

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontFamily: Font.OpenSans,
        fontSize: 18,
    }
});

export default MainButton;