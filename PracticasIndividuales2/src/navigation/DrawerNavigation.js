import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import EntradaScreen from "../screens/EntradaScreen";


const Drawer = createDrawerNavigator()

 export function DrawerNavigation() {
    return( 
        <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="EntradaScreen" component={EntradaScreen} />
      </Drawer.Navigator>
    )
}