'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searhRef = useRef();
  const router = useRouter();
  const HandleSearch = (event) => {
    const SearchValue = searhRef.current.value;
    if(!SearchValue || SearchValue.trim() === "")  return
    
    if (event.key === "Enter" || event.type === "click"){
        event.preventDefault();
        router.push(`/search/${SearchValue}`);
    }
    // alert(searhRef.current.value)
  };
  return (
    <div className="relative">
      <input placeholder="Searh..." className="w-full p-2 rounded-md w" ref={searhRef} onKeyDown={HandleSearch}/>
      <button className="absolute top-2 end-2" onClick={HandleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
