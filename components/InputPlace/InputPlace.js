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
            props.setPalceList([...props.palceList, {key: Math.random().toString(), value: props.inputValue}]);
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
      marginTop: 50,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center'
    }
    
  });
  

export default InputPlace;