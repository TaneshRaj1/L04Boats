import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({Boatname, Boatdescription, icon_name, icon_color , Boatimage }) => {
    return (
        <View>
            <Text></Text>

            <Text>
                <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: "grey"}}>{Boatname}</Text>
                </Text>
            <Text>
                {Boatdescription}
                <Image source={Boatimage} style={{width:400,height:500}} />
            </Text>
        </View>
    );
};

export default Boat;