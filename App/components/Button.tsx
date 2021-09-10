import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonIcon: {width: 20, height: 20, marginEnd: 8},
  buttonText: {
    color: colors.white,
  },
});
export const Button = ({text, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../assets/images/reverse.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
