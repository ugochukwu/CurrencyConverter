import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  button: {
    borderEndColor: colors.border,
    borderEndWidth: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: colors.textLight,
  },
});

interface ConverstionInputProps extends TextInputProps {
  text: string;
  onButtonPress?: () => void;
}
export const ConversionInput = ({
  text,
  onButtonPress,
  ...textInputProps
}: ConverstionInputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput {...textInputProps} style={styles.input} />
    </View>
  );
};
