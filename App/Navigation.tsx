import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      options={({navigation, route}) => ({
        title: route.params?.title,
        headerBackVisible: false,
        headerLeft: () => <View style={{width: 6}} />,
        headerRight: () => (
          <TouchableOpacity>
            <Icon
              name="close"
              size={24}
              color={colors.blue}
              onPress={() => navigation.pop()}
              style={{padding: 16, paddingEnd: 0}}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export type RootStackParams = {
  Main: undefined;
  Home: undefined;
  Options: undefined;
  CurrencyList:
    | {
        title: string;
        activeCurrency: string;
        onChangeCurrency: (currency: string) => void;
      }
    | undefined;
};

export type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

export type CurrencyListProps = NativeStackScreenProps<
  RootStackParams,
  'CurrencyList'
>;
export default () => <Navigation />;
