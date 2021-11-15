import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from 'react-native';
import ListItems from './components/ListItems/ListItems';


export default function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [palceList, setPalceList] = useState([]);

  const list = palceList.map((item, i) => {
    return (
      <ListItems placeName={item} key={i} onItemPressed={()=> alert(item)} />
    )
  })
  return (
    <View style={styles.container}>
      
      <View style={styles.inputView}>
        <TextInput
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
        }}
        placeholder="Add a Place..."
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={()=> {
            if (inputValue !== "") {
            setPalceList([...palceList, inputValue]);
            }
          }}
        >

        </Button>
      </View>

      <ScrollView style={{
        width: "100%",
      }}>
        {list}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  inputView: {
    padding: 20,
    width: '100%',
    marginTop: 50,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  }
  
});
