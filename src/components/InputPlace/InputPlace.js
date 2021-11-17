import React from 'react';
import { StyleSheet,  View, TextInput, Button } from 'react-native';


const InputPlace = (props) => {
    return (
        <View style={styles.inputView}>
        <TextInput
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
        }}
        placeholder="Add a Place..."
        value={props.inputValue}
        onChangeText={text => props.setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={()=> {
            if (props.inputValue !== "") {
            props.addPlace({
              key: Math.random().toString(), 
              value: props.inputValue,
              image: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dhaka_14th_March_%2832624769393%29.jpg/1200px-Dhaka_14th_March_%2832624769393%29.jpg"
              }
            });
            props.setInputValue("");
            }
          }}
        >

        </Button>
      </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
      padding: 20,
      width: '100%',
      marginTop: 0,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center'
    }
    
  });
  

export default InputPlace;