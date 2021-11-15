import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';

const ListItems = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItems} >
                <Image source={props.image} style={{
                    width: 50,
                    height: 50,
                }} />
            <Text style={{paddingLeft: 15 }}>
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
        flexDirection: "row"
        
    }
})

export default ListItems;