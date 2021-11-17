import React, {useState} from 'react';
import InputPlace from '../InputPlace/InputPlace';
import { addPlace } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import {View,Button} from 'react-native';
import PickImage from '../PickImage/PickImage';

const mapDispatchToProps = dispatch => {
    return {
      addPlace: place => dispatch(addPlace(place)),
    }
  }

const SharePlaces = (props) => {
    const [inputValue, setInputValue] = useState(""); 
    const [image, setImage] = useState("");
    return (
      <View>
        <PickImage image={image} setImage={setImage} />
        <InputPlace 
          inputValue={inputValue}
          setInputValue={setInputValue}
        /> 
        <View style={{
          alignItems:"center"
        }}>
          <Button
            title="Add"
            onPress={()=> {
              if (inputValue !== "") {
              props.addPlace({
                key: Math.random().toString(), 
                value: inputValue,
                image: {
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dhaka_14th_March_%2832624769393%29.jpg/1200px-Dhaka_14th_March_%2832624769393%29.jpg"
                }
              });
              setInputValue("");
              }
            }}
          >
          </Button>
        </View>
      </View>
        
    );
};

export default connect(null, mapDispatchToProps)(SharePlaces);