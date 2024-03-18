import React from 'react';
import sourceImage from "./source.png";
import destinationImage from "./destination.png";

const InputItem = ({ type }) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <img src={type === 'source' ? sourceImage : destinationImage} alt="" width={15} height={15} />
      <input type="text" placeholder={type === 'source' ? 'Pickup Location' : 'Drop Location'} className='bg-transparent w-full outline-none' />
    </div>
  );
}

export default InputItem;
