import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
    }
});

export default Card;