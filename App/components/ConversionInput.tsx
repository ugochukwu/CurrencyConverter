import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import colors from '../colors';

interface style {
  container: ViewStyle;
  buttonText: TextStyle;
  input: ViewStyle;
  button: ViewStyle;
  containerDisabled: ViewStyle;
}

const styles = StyleSheet.create<style>({
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
    backgroundColor: colors.white,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
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
  containerDisabled: {
    backgroundColor: colors.offWhite,
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
  let containerSyle = [styles.container];

  if (textInputProps.editable === false) {
    containerSyle.push(styles.containerDisabled);
  }

  return (
    <View style={containerSyle}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput {...textInputProps} style={styles.input} />
    </View>
  );
};
