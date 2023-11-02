import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomDrawerContent from './components/CustomDrawerContent';
import AboutScreen from './screens/AboutScreen';
import AddNewsScreen from './screens/AddNewsScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import NewsContext from './store';
import DetailsScreen from './screens/DetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
}

export default function App() {
  const [newsList, setNewsList] = useState([])
  return (
    <NewsContext.Provider value={{newsList,setNewsList}}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{title:"Home"}}></Drawer.Screen>
        <Drawer.Screen name="AddNews" component={AddNewsScreen} options={"Add News"}></Drawer.Screen>
        <Drawer.Screen name="Contact" component={ContactScreen}></Drawer.Screen>
        <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    </NewsContext.Provider>
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
