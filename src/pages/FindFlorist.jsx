import React, {useState, useEffect} from "react";
import Maps from "../components/Map/Maps";
import {getCurrentLatLng} from "../components/Map/geolocation"



function FindFlorist() {
    const [coords, setCoords]= useState({})
    useEffect(() => {
        retrieveCoords();
      }, []);
    //const coordinates = await getCurrentLatLng()
//const {lat, lng} = await getCurrentLatLng()
//console.log(setCoords)
//setCoords({lat, lng})

const retrieveCoords = async () => {
    let { lat, lng } = await getCurrentLatLng();
    setCoords({ lat, lng });
  };

console.log(coords)

  return (


      <Maps lng={coords.lng} lat={coords.lat}/>


  );
}

export default FindFlorist
