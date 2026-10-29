import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import Boat from "./components/Boat";



class Allboats extends React.Component {
  render() {
    return (
        <ScrollView>
            <Text></Text>
            <Text>GetABoat - For Sale</Text>
            <Boat Boatname={"Sea Ray 500 Sundancer "}
                 Boatdescription={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                 icon_name={"ship"} icon_color={"grey"}
                 Boatimage={require("./img/sea_ray.jpg")}/>

            <Boat Boatname={"Four Winns Horizon 180"}
                  Boatdescription={"A sporty look and refined details truly set the Horizon 180 above all others."}
                  icon_name={"sailboat"} icon_color={"blue"}
                  Boatimage={require("./img/four_winns.jpg")}/>

            <Boat Boatname={"Flipper 640 ST"}
                  Boatdescription={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                  icon_name={"house-flood-water"} icon_color={"red"}
                  Boatimage={require("./img/flipper.jpg")}/>

            <Boat Boatname={"Princess V48"}
                  Boatdescription={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                  icon_name={"cloud-showers-water"} icon_color={"green"}
                  Boatimage={require("./img/princess.jpg")}/>

            <Boat Boatname={"Bayliner 175 Bowrider"}
                  Boatdescription={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                  icon_name={"water"} icon_color={"purple"}
                  Boatimage={require("./img/bayliner.jpg")}/>

            <Boat Boatname={"Fairline Targa 47"}
                  Boatdescription={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                  icon_name={"house-flood-water-circle-arrow-right"} icon_color={"yellow"}
                  Boatimage={require("./img/fairline.jpg")}/>


        </ScrollView>
    )
  }

}
export default Allboats;