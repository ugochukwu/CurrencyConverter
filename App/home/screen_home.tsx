import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../colors';
import {ConversionInput} from '../components/ConversionInput';

const windowSize = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    height: '25%',
    width: '25%',
  },
  logoBackground: {
    height: '45%',
    width: '45%',
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};
