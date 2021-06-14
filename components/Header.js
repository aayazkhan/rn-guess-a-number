import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
import DefaultStyles from '../constants/default-styles';
const Header = props => {
    return (
        <View style={{
            ...styles.headerBase, ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={{ ...DefaultStyles.HeaderText, ...props.style, ...styles.title }}>{props.children}</TitleText>
        </View>
    );
};


const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    headerIOS: {
        backgroundColor: Colors.white,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    },
    title: {
        color: Platform.OS === 'android' ? Colors.white : Colors.primary,
    },
});

export default Header;