
import React from "react";
import { StyleSheet } from "react-native";

import Font from '../constants/Font';

export default StyleSheet.create({
    HeaderText:{
        color: 'black',
        fontSize: 20,
    },
    TitleText: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: Font.OpenSansBold
    },
    bodyText: {
        fontFamily: Font.OpenSans
    }
});