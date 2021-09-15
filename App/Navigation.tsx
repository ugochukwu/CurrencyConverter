import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import colors from './colors';
import {Home} from './home/screen_home';
import Options from './options/screen_options';

const Stack = createNativeStackNavigator();

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
          options={{headerStyle: {backgroundColor: colors.white}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParams = {
  Home: undefined;
  Options: undefined;
};

export type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

export default () => <Navigation />;
