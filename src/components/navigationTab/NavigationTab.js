import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FindPlaces from '../FindPlaces/FindPlaces';
import SharePlaces from '../SharePlaces/SharePlaces';


const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Share Places" component={SharePlaces} />
            <Tab.Screen name="Find Places" component={FindPlaces} />
        </Tab.Navigator>
    );
};

export default NavigationTab;