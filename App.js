import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./src/components/Home";
import Details from "./src/components/Details";
import Liked from "./src/components/Liked";
import Profile from "./src/components/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./assets/Colors";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.Orange,
        tabBarInactiveTintColor: Colors.Gray,
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen name="Liked" component={Liked} 
         options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={32} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
