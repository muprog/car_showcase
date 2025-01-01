'use client'

import { FormEvent, FormEventHandler, useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import {useRouter} from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
<Image
src={'/magnifying-glass.svg'}
alt="magnifying glass"
width={40}
height={40}
className="object-contain"
/>
  </button>
)

export default function SearchBar({setModel,setManufacturer}:SearchBarProps) {
  const router=useRouter();
    const [searchManufacturer,setSearchManufacturer]=useState('');
    const [searchModel,setSearchModel]=useState('');
    function handleSearch(e:FormEvent<HTMLFormElement>){
e.preventDefault();
if(searchManufacturer==='' && searchModel===''){
  return alert('please fill in the search bar')
}
setModel(searchModel)
setSearchManufacturer(searchManufacturer)
    }


  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className="searchbar__item">
    <SearchManufacturer 
   selected={searchManufacturer}
   setSelected={setSearchManufacturer}
   />
   <SearchButton otherClasses='sm:hidden'/>
    </div>
    <div className="searchbar__item">
      <Image
      src={'/model-icon.png'}
      alt="model"
      width={25}
      height={25}
      className="absolute w-[20px] h-[20px] ml-4"
      />
      <input
      type="text"
      name="model"
      value={searchModel}
      onChange={e=>setSearchModel(e.target.value)}
      placeholder="Tiguan"
      className="searchbar__input"
      />
      <SearchButton otherClasses="sm:hidden"/>
    </div>
    <SearchButton otherClasses="max-sm:hidden"/>

   </form>
  )
}
