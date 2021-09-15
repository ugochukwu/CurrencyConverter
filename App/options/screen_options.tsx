import React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RowItem, Separator} from '../components/row_item';

const openLink = (url: string) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong", "Please try again later.');
  });
};

const Options = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <RowItem
          onPress={() => Alert.alert('Todo!')}
          text="Themes"
          rightIcon={
            <Icon name="chevron-right" size={30} color={colors.blue} />
          }
        />
        <Separator />
        <RowItem
          onPress={() =>
            openLink(
              'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter',
            )
          }
          text="React Native Basics"
          rightIcon={<Icon name="share" size={30} color={colors.blue} />}
        />
        <Separator />
        <RowItem
          onPress={() => openLink('https://reactnativebyexample.com')}
          text="React Native by Example"
          rightIcon={<Icon name="share" size={30} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
