import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Buscar from '../pages/Buscar';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
                options={{
                    headerShown: false,
                    title: 'Detalhes'
                }}
            />

            <Stack.Screen
                name='Buscar'
                component={Buscar}
                options={{
                    title: 'Sua busca',
                    headerTintColor: '#fff',

                    headerTitleStyle: {
                        color: '#fff'
                    },

                    headerStyle: {
                        backgroundColor: '#141a29'
                    }
                }}
            />
        </Stack.Navigator>
    );
}