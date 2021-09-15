import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import colors from './colors';
import {CurrencyList} from './currencylist/screen_currencylist';
import {Home} from './home/screen_home';
import Options from './options/screen_options';

const Stack = createNativeStackNavigator();

const destinationScreenOptions = {headerStyle: {backgroundColor: colors.white}};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={destinationScreenOptions}
        />
        <Stack.Screen
          name="CurrencyList"
          component={CurrencyList}
          options={destinationScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParams = {
  Home: undefined;
  Options: undefined;
  CurrencyList: undefined;
};

export type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

export default () => <Navigation />;
