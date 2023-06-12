import React from 'react';
import { Text } from 'react-native';
import styleConfig from '../config/styles'

function AppText({ children, style }) {
    return <Text style={[styleConfig.text, style]}>{children}</Text>;
}

export default AppText;