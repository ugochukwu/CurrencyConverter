import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../colors';
import {Button} from '../components/Button';
import {ConversionInput} from '../components/ConversionInput';
import {KeyboardSpacer} from '../components/KeyboardSpacer';

const windowSize = Dimensions.get('window');

let logoSize: {height: any; width: any};
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  logoSize = {height: windowSize.width * 0.25, width: windowSize.width * 0.25};
} else {
  logoSize = {height: '25%', width: '25%'};
}

let logoBackgroundSize: {height: any; width: any};
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  logoBackgroundSize = {height:  windowSize.width * 0.45, width: windowSize.width / 0.45};
} else {
  logoBackgroundSize = {height: '45%', width: '45%'};
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    position: 'absolute',
    height: logoSize.height,
    width: logoSize.width,
  },
  logoBackground: {
    height:logoBackgroundSize.height,
    width:logoBackgroundSize.width,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.white,
    textAlign: 'center',
    marginVertical: 16,
  },
  fineprint: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
  },
});

export const Home = () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = '0.84325';
  const today = format(new Date(), 'MMMM do, yyyy');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === 'android')?'padding':'height'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.header}>Currency Converter</Text>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => Alert.alert('Todo!')}
        onChangeText={(text: string) => console.log(text)}
        keyboardType="numeric"
      />

      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => Alert.alert('Todo!')}
        onChangeText={(text: string) => console.log(text)}
        keyboardType="numeric"
        editable={false}
      />
      <Text
        style={
          styles.fineprint
        }>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${today}`}</Text>

      <Button text="Reverse Currencies" onPress={() => Alert.alert('Todo!')} />
      {/* <KeyboardSpacer */}
      {/* onToggle={isKeyboardVisible => setScrollEnabled(isKeyboardVisible)} */}
      {/* /> */}
    </KeyboardAvoidingView>
  );
};
