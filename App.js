import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BooksScreen from './screens/BooksScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <BooksScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
