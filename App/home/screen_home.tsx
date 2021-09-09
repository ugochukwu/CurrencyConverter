import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
    </View>
  );
};
