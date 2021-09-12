import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../colors';
import {Button} from '../components/Button';
import {ConversionInput} from '../components/ConversionInput';

const windowSize = Dimensions.get('window');

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
    height: windowSize.width * 0.25,
    width: windowSize.width * 0.25,
  },
  logoBackground: {
    height: windowSize.width * 0.45,
    width: windowSize.width / 0.45,
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
    paddingTop: windowSize.height * 0.2,
  },
});

export const Home = () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = '0.84325';
  const today = format(new Date(), 'MMMM do, yyyy');

  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const onKeyboardShownListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setScrollEnabled(true);
      },
    );

    const onKeyboardHiddenListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setScrollEnabled(false);
      },
    );
    return () => {
      onKeyboardShownListener.remove();
      onKeyboardHiddenListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
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

          <Button
            text="Reverse Currencies"
            onPress={() => Alert.alert('Todo!')}
          />
          <View style={{height: windowSize.height}} />
        </View>
      </ScrollView>
    </View>
  );
};
