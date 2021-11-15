import React from 'react';
import { FlatList } from 'react-native';
import ListItems from '../ListItems/ListItems';


const PlaceList = (props) => {
    return (
        <FlatList style={{
            width: "100%",
          }}
            data={props.palceList}
            renderItem={(info)=>{
              return (
                <ListItems placeName={info.item.value} 
                onItemPressed={()=> props.handleSelecetedPalce(info.item.key)} />
              );
            }}
            />
    );
};

export default PlaceList;