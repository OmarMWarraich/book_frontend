import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BooksScreen from './screens/BooksScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="자유톡" 
            component={BooksScreen} 
            options={{ 
              headerTitleAlign: 'center',
              headerShadowVisible: false,
             }}
          />
          <Stack.Screen 
            name="BookDetails" 
            component={BookDetailsScreen} 
            options={{ 
              headerTitleAlign: 'center',
              headerShadowVisible: false,
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
