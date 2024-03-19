"use client"
import React, { useState } from "react";
import GoogleMapSection from "./GoogleMapSection";
import SearchSection from "./SearchSection";
import { SourceContext } from "./SourceContext";
import {DestinationContext } from "./DestinationContext";
const Page = () => {
    const [source,setSource]=useState([]);
    const [destination,setDestination]=useState([]);
  return (
    <SourceContext.Provider value={{source,setSource}}>
        <DestinationContext.Provider value={{destination,setDestination}}>
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-2 md:pd-6 border-[2px] rounded-xl">
          <SearchSection />
        </div>

        <div className="col-span-2">
          <GoogleMapSection />
        </div>
      </div>
    </div>
    </DestinationContext.Provider>
    </SourceContext.Provider>
  );
};

export default Page;
