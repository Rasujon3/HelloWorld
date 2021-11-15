import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

export default function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [palceList, setPalceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelecetedPalce = key => {
    const place = palceList.find(place => {
      return place.key === key;
    })
    setSelectedPlace(place);
  }

  let PlaceDetails = null;
  if (selectedPlace !== null) {
    PlaceDetails = <PlaceDetail place={setSelectedPlace}/>
  }

  return (
    
    <View style={styles.container}>
      
      {PlaceDetails}

      <InputPlace 

        inputValue={inputValue}
        setInputValue={setInputValue}
        palceList={palceList}
        setPalceList={setPalceList}
      
      /> 
       <PlaceList palceList={palceList} handleSelecetedPalce={handleSelecetedPalce} />
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
