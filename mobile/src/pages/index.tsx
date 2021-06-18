import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../ui/components/Button';
import { RootStackParamList } from 'ui/router/Router';

interface IndexProps {
  navigation: StackNavigationProp<RootStackParamList, 'SearchDiarist'>;
}

const Index = ({ navigation }: IndexProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SearchDiarist')}
      >
        Encontrar Diarista
      </Button>
    </View>
  );
};

export default Index;
