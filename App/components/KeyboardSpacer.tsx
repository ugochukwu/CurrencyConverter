import React, {useEffect, useState} from 'react';
import {Dimensions, Keyboard, StyleSheet, View} from 'react-native';
import colors from '../colors';

interface KeyboardSpacerProps {
  onToggle: (isKeyboardVisible: boolean) => void;
}

const styles = StyleSheet.create({
  container: {
    start: 0,
    end: 0,
    bottom: 0,
  },
});

export const KeyboardSpacer = ({onToggle}: KeyboardSpacerProps) => {
  const [keyboardHeight, setkeyboardHeight] = useState(0);

  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', event => {
      const height = screenHeight - event.endCoordinates.screenY;
      setkeyboardHeight(height + 20);
      onToggle(true);
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', event => {
      setkeyboardHeight(0);
      onToggle(false);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return <View style={[styles.container, {height: keyboardHeight}]} />;
};
