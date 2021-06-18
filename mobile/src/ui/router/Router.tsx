import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationTheme } from 'ui/themes';

import Index from 'pages';
import SearchDiarist from 'pages/search-diarist';

import logoImg from '@assets/img/logos/e-diaristas-logo.png';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Index: undefined;
  SearchDiarist: undefined;
};

const Router = () => (
  <NavigationContainer theme={NavigationTheme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              style={{ width: 150, height: 50, resizeMode: 'contain' }}
              source={logoImg}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SearchDiarist"
        component={SearchDiarist}
        options={{
          headerTitle: 'Encontrar diaristas',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
