import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  Image,
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
import {ConversionContext} from '../CurrencyConverterContext';
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
  const today = format(new Date(), 'MMMM do, yyyy');
  const [value, setValue] = useState('100');
  const {
    setBaseCurrency,
    baseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    swapCurrencies,
    exchangeRate,
  } = useContext(ConversionContext);

  const quoteCurrencyRate =
    quoteCurrency === baseCurrency ? 1 : exchangeRate.get(quoteCurrency);

  const conversionRate =
    quoteCurrencyRate === undefined ? 0 : quoteCurrencyRate;

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
          value={value}
          onButtonPress={() =>
            navigation.navigate({
              name: 'CurrencyList',
              params: {
                title: 'Base Currency',
                isBaseCurrency: true,
              },
            })
          }
          onChangeText={(text: string) => setValue(text)}
          keyboardType="numeric"
        />

        <ConversionInput
          text={quoteCurrency}
          value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
          onButtonPress={() =>
            navigation.push('CurrencyList', {
              title: 'Quote Currency',
              isBaseCurrency: false,
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

        <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
      </View>
    </View>
  );
};
