import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace,deletePlace } from './redux/actionCreators';


const mapStateToProps = state => {
  return {
    palceList: state.palceList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: place => dispatch(addPlace(place)),
    deletePlace: key => dispatch(deletePlace(key)),
  }
}


const MainComponent = (props) => {
    const [inputValue, setInputValue] = useState(""); 
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    const handleSelecetedPalce = key => {
      const place = props.palceList.find(place => {
        return place.key === key;
      })
      setSelectedPlace(place);
    }
  
    const handleHideModal = () => {
      setSelectedPlace(null);
    }
  
    const handleDeleteItem = (key) => {  
      props.deletePlace(key);
      setSelectedPlace(null);
    }
  
    let PlaceDetails = null;
    if (selectedPlace !== null) {
      PlaceDetails = <PlaceDetail 
        place={selectedPlace}
        handleHideModal={handleHideModal}
        handleDeleteItem={handleDeleteItem}
      />
    }
  
    return (
      
      <View style={styles.container}>
        
        {PlaceDetails}
  
        <InputPlace 
  
          inputValue={inputValue}
          setInputValue={setInputValue}
          palceList={props.palceList}
          addPlace={props.addPlace}
        
        /> 
         <PlaceList palceList={props.palceList} handleSelecetedPalce={handleSelecetedPalce} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    
  });

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);