import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../colors';
import {RowItem, Separator} from '../components/row_item';
import {Props} from '../Navigation';
import currencies from './currencies.json';

export const CurrencyList: React.FC<Props> = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <RowItem text={item} onPress={() => navigation.navigate('Home')} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => (
          <View style={{paddingBottom: insets.bottom}} />
        )}
      />
    </View>
  );
};
