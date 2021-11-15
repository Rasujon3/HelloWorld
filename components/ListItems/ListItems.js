import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const ListItems = props => {
    return (
        <View style={styles.listItems}>
            <Text>
                {props.placeName}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5
    }
})

export default ListItems;