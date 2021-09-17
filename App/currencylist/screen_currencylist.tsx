import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../colors';
import {RowItem, Separator} from '../components/row_item';
import {CurrencyListProps} from '../Navigation';
import currencies from './currencies.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigatorScreenParams} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const CurrencyList: React.FC<CurrencyListProps> = ({
  navigation,
  route,
}: CurrencyListProps) => {
  const insets = useSafeAreaInsets();

  function sendCurrency(item: string): {
    baseCurrency: string | undefined;
    quoteCurrency: string | undefined;
  } {
    return route.params?.selectionMode === 'base'
      ? {baseCurrency: item, quoteCurrency: undefined}
      : {quoteCurrency: item, baseCurrency: undefined};
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        renderItem={({item}) => {
          const selectedItem = route.params?.activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() =>
                navigation.navigate({
                  name: 'Home',
                  params: sendCurrency(item),
                })
              }
              rightIcon={selectedItem ? CheckMark() : undefined}
            />
          );
        }}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => (
          <View style={{paddingBottom: insets.bottom}} />
        )}
      />
    </View>
  );
};
function CheckMark(): JSX.Element {
  return (
    <View style={{backgroundColor: colors.blue, borderRadius: 15}}>
      <Icon name="check" size={20} color={colors.white} style={{padding: 4}} />
    </View>
  );
}
