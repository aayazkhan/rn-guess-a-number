import React from 'react';
import { Text } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const BodyText = props => {
    return (
        <Text style={{ ...DefaultStyles.BodyText, ...props.style }}>{props.children}</Text>
    );
};

export default BodyText;