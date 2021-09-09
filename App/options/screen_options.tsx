import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const Option = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.title}>Themes</Text>
        <Icon name="chevron-right" size={30} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.title}>React Native Basics</Text>
        <Icon name="share" size={30} color={colors.blue} />
      </TouchableOpacity>

      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.title}>React Native by Example</Text>
        <Icon name="share" size={30} color={colors.blue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Option;
