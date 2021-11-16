import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FindPlaces from '../FindPlaces/FindPlaces';
import SharePlaces from '../SharePlaces/SharePlaces';
import Icons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Find Places" 
                component={FindPlaces} 
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Icons name="md-map" color={color} size={size} />

                    )
                }}
                />
            <Tab.Screen 
                name="Share Places" 
                component={SharePlaces}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Icons name="ios-share-alt" color={color} size={size} />

                    )
                }}
                 />
            
        </Tab.Navigator>
    );
};

export default NavigationTab;