import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Filmes from '../pages/Filmes';
import StackRoutes from './stackRoutes';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#090a0e',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#e72f49',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff'
            }}
        >
            <Drawer.Screen
                name='HomeDrawer'
                component={StackRoutes}
                options={{
                    title: 'Início',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='Filmes'
                component={Filmes}
                options={{
                    title: 'Meus Filmes',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    );
}