import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

const ListItems = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItems} >
            <Text>
                {props.placeName}
            </Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        
    }
})

export default ListItems;