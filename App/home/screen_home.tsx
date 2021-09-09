import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../colors';

const windowSize = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center'
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
    height:'45%',
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
    </View>
  );
};
