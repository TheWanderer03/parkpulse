import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import second_page from './components/second_page';
import ChennaiScreen from './components/ChennaiScreen'

export default function App() {
  return (
    <NavigationContainer>
      <MyStack>

      </MyStack>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 80,
        
      },
      headerTintColor: '#000',
      headerTitleStyle: {fontWeight: 'bold'},
    }}
    >
      <Stack.Screen 
      name="home"
      component={Home}
       />
      <Stack.Screen name="SecondPage" component={second_page} />
      < Stack.Screen name="ChennaiScreen" component={ChennaiScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});