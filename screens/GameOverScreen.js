import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from "react-native";

import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Font from '../constants/Font';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/success.png')}
                        style={styles.image}
                        resizeMode='cover' />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userChoice}</Text></BodyText>
                </View>
                <View style={styles.button}>
                    <MainButton onPress={props.onReStart} >New Game</MainButton>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderRadius: Dimensions.get('window').width * 0.5 / 2,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 40,
    },
    resultText: {
        alignItems: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
        textAlign: 'center',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: Font.OpenSansBold,
    },
    button: {
        margin: 10,
    },
});

export default GameOverScreen;