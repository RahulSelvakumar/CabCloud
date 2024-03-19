"use client"
import React,{useContext,useEffect} from 'react'
import InputItem from "./InputItem";
import { SourceContext} from './SourceContext';
import { DestinationContext } from './DestinationContext';
const SearchSection = () => {
    const {source,setSource} = useContext(SourceContext);
    const {destination,setDestination} = useContext(DestinationContext);
    useEffect(()=>{
        if(source){
            console.log(source);
        }
        if(destination){
            console.log(destination);
        }
    },[source,destination])

  return (
    <div>
    <p className="text-[20px] font-bold">Get a ride</p>
    <InputItem type="source" />
    <InputItem type="destination" />

    <button className="p-3 bg-black w-full mt-5 text-white rounded-lg">
      Search
    </button>
    </div>
  )
}

export default SearchSection