import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Home} from './home/screen_home';
import Options from './options/screen_options';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Options" component={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => <Navigation />;
