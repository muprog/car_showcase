'use client'
import { manufacturers } from '@/constants'
import { searchManufacturerProps } from '@/types'
import { useState,Fragment } from 'react'
import React from 'react'
import Image from 'next/image'
import { Combobox,Transition } from '@headlessui/react'
export default function SearchManufacturer({selected,setSelected}:searchManufacturerProps) {
    const [query,setQuery]=useState('');
    const filteredManufacturers=query===''?
    manufacturers:manufacturers.filter(item=>(
        item.toLowerCase()
        .replace(/\s+/g,'')
        .includes(query.toLowerCase().replace(/s+/g,""))
    ))
  return (
    <div className='search-manufacturer'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative w-full'>
<Combobox.Button className={'absolute top-[14px]'}>
<Image 
src={"/car-logo.svg"}
alt='Car Logo'
width={20}
height={20}
className='ml-4'
/>
</Combobox.Button>
<Combobox.Input className={'search-manufacturer__input'}
placeholder='volkswagen'
displayValue={(manufacturer:string)=>manufacturer}
onChange={e=>setQuery(e.target.value)}
/>
<Transition
as={Fragment}
leave='transition ease-in duration-100'
leaveFrom='opacity-100'
leaveTo='opacity-0'
afterLeave={()=>setQuery('')}
>
<Combobox.Options>
{
 filteredManufacturers.map(item=>(
        <Combobox.Option
        key={item}
        className={({active})=>`relative search-manufacturer__option ${active?'bg-primary-blue text-white':'text-gray-900'}`}
        value={item}
        >
            {item}
        </Combobox.Option>
    ))

}
</Combobox.Options>
</Transition>
        </div>
      </Combobox>
    </div>
  )
}
