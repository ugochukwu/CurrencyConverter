import React from 'react';
import {StatusBar, View} from 'react-native';
import colors from '../colors';

export const CurrencyList: React.FC<{}> = () => <View>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
</View>;
