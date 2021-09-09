import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
});

interface RowItemProps {
  rightIcon: JSX.Element;
  text: String;
  onPress?: () => void;
}

export const RowItem = (props: RowItemProps) => {
  return (
    <TouchableOpacity style={styles.row} onPress={props.onPress}>
      <Text style={styles.title}>{props.text}</Text>
      {props.rightIcon}
    </TouchableOpacity>
  );
};

export const Separator = () => {
  return <View style={styles.separator} />;
};
