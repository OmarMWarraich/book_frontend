import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import BooksScreen from './screens/BooksScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
