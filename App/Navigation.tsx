import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Modal} from 'react-native';
import colors from './colors';
import {CurrencyList} from './currencylist/screen_currencylist';
import {Home} from './home/screen_home';
import Options from './options/screen_options';

const Stack = createNativeStackNavigator<RootStackParams>();

const destinationScreenOptions = {headerStyle: {backgroundColor: colors.white}};
const Navigation = () => {
  return (
    <NavigationContainer>
      <ModalNavigator />
    </NavigationContainer>
  );
};

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="Options"
      component={Options}
      options={destinationScreenOptions}
    />
  </Stack.Navigator>
);

const ModalStack = createNativeStackNavigator<RootStackParams>();
const ModalNavigator = () => (
  <ModalStack.Navigator screenOptions={{presentation: 'modal'}}>
    <ModalStack.Screen
      name="Main"
      component={MainNavigator}
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({route}) => ({title: route.params?.title})}
    />
  </ModalStack.Navigator>
);

type RootStackParams = {
  Main: undefined;
  Home: undefined;
  Options: undefined;
  CurrencyList: {title: string} | undefined;
};

export type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

export default () => <Navigation />;
