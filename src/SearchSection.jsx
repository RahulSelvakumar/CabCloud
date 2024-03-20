"use client"
import React,{useContext,useState} from 'react'
import InputItem from "./InputItem";
import { SourceContext} from './SourceContext';
import { DestinationContext } from './DestinationContext';
import CarListOptions from './CarListOptions';
const SearchSection = () => {
    const {source,setSource} = useContext(SourceContext);
    const {destination,setDestination} = useContext(DestinationContext);
    const [distance,setDistance] = useState();
    const calculateDistance=()=>{
      const dist=window.google.maps.geometry.spherical.computeDistanceBetween(
        {lat:source.lat,lng:source.lng},
        {lat:destination.lat,lng:destination.lng})
        setDistance(dist*0.000621374);
    }
  return (
     <div>
    <div>
     <p className="text-[20px] font-bold">Get a ride</p>
     <InputItem type="source" />
     <InputItem type="destination" />
 
     <button className="p-3 bg-black w-full mt-5 text-white rounded-lg"
     onClick={()=>{calculateDistance()}}>
       Search
     </button>
     </div>
     {distance?<CarListOptions distance={distance}/>:null}  
     </div>
  )
}

export default SearchSection