import {NavigationProp} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import {Button} from '../components/Button';
import {ConversionInput} from '../components/ConversionInput';
import {Props} from '../Navigation';

//make a hook with this logic
const windowSize = Dimensions.get('screen');
let logoSize: {height: any; width: any};
if (windowSize.width >= 600) {
  logoSize = {height: '15%', width: '15%'};
} else {
  logoSize = {height: windowSize.width * 0.25, width: windowSize.width * 0.25};
}
let logoBackgroundSize: {height: any; width: any};
if (windowSize.width >= 600) {
  logoBackgroundSize = {height: '45%', width: '45%'};
} else {
  logoBackgroundSize = {
    height: windowSize.width * 0.45,
    width: windowSize.width / 0.45,
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
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
    height: logoBackgroundSize.height,
    width: logoBackgroundSize.width,
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
  content: {
    marginTop: windowSize.height * 0.1,
  },
  navheader: {
    alignItems: 'flex-end',
    marginEnd: 16,
  },
});

export const Home = ({navigation}: Props) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = '0.84325';
  const today = format(new Date(), 'MMMM do, yyyy');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <SafeAreaView style={styles.navheader}>
        <TouchableOpacity onPress={() => navigation.navigate('Options')}>
          <Icon name="settings" size={30} style={{color: colors.white}} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.content}>
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
          text={baseCurrency}
          value="123"
          onButtonPress={() =>
            navigation.navigate({
              name: 'CurrencyList',
              params: {title: 'Base Currency', activeCurrency: baseCurrency},
            })
          }
          onChangeText={(text: string) => console.log(text)}
          keyboardType="numeric"
        />

        <ConversionInput
          text={quoteCurrency}
          value="123"
          onButtonPress={() =>
            navigation.push('CurrencyList', {
              title: 'Quote Currency',
              activeCurrency: quoteCurrency,
            })
          }
          onChangeText={(text: string) => console.log(text)}
          keyboardType="numeric"
          editable={false}
        />
        <Text
          style={
            styles.fineprint
          }>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${today}`}</Text>

        <Button
          text="Reverse Currencies"
          onPress={() => Alert.alert('Todo!')}
        />
      </View>
    </View>
  );
};
