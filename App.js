import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';

export default function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [palceList, setPalceList] = useState([]);

  return (
    <View style={styles.container}>

      <InputPlace 

      inputValue={inputValue}
      setInputValue={setInputValue}
      palceList={palceList}
      setPalceList={setPalceList}
      
      />

      
       <PlaceList palceList={palceList} />
      
      
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
  
});
