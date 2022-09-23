import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Books from '../screens/Books'
import Favoritos from '../screens/Favoritos'
import AudioBooks from '../screens/AudioBooks'

import { Entypo, Feather, AntDesign, FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#A05105',
        tabBarActiveTintColor: '#673403',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="AudioBooks"
        component={AudioBooks}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="microphone" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
