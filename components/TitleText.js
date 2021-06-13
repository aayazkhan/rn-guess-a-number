import React from 'react';
import { Text } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const TitleText = props => {
    return (
        <Text style={{ ...DefaultStyles.TitleText, ...props.style }}>{props.children}</Text>
    );
}

export default TitleText;