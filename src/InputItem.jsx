"use client"
import React, { useEffect } from 'react';
import sourceImage from "./source.png";
import destinationImage from "./destination.png";
import {useState} from "react"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const InputItem = ({ type }) => {
    const [value, setValue] = useState(null);
    const [placeholder,setPlaceholder] = useState(null);
    const [source,setSource] = useState(null);
    const [destination,setDestination] = useState(null);
    useEffect(() => {
        type==='source'?
        setPlaceholder('Pickup Location'):
        setPlaceholder('Destination Location')},[type])

const getLatandLng=(place,type)=>{
        geocodeByAddress(place.label)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) =>{
            console.log(lng);
        });
    }


  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <img src={type === 'source' ? sourceImage : destinationImage} alt="" width={15} height={15} />
      <GooglePlacesAutocomplete
      apiKey='AIzaSyANExzggzbZP50-oI-zYdlCj9B2MS38AXk'
        selectProps={{
          value,
          onChange: (place)=>{getLatandLng(place,type);setValue(place)},
          placeholder:placeholder,
          isClearable: true,
          className:'w-full',
          components:{
            DropdownIndicator:false
          },
          styles:{
            control:(provided)=>({
                ...provided,
                backgroundColor:'#00ffff00',
                border:'none',
            }),
        }
        }}/>
      
    </div>
  );
}

export default InputItem;
