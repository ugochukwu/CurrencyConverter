import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import {RowItem, Separator} from '../components/row_item';
import {CurrencyListProps} from '../Navigation';
import currencies from './currencies.json';
import {useActiveCurrencyContext} from './useActiveCurrencyContext';

export const CurrencyList: React.FC<CurrencyListProps> = ({
  navigation,
  route,
}: CurrencyListProps) => {
  const insets = useSafeAreaInsets();
  const [activeCurrency, setActiveCurrency] = useActiveCurrencyContext(
    route.params?.isBaseCurrency,
  );
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        renderItem={({item}) => {
          const selectedItem = activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() => {
                setActiveCurrency(item);
                navigation.navigate('Home');
              }}
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
