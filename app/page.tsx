"use client"
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utilis";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {
 const [allCars,setAllcars]=useState([])
 const [loading,setLoading]=useState(false);


 const [manufacturer,setManufacturer]=useState("");
 const [model,setModel]=useState("");


 const [fuel,setFuel]=useState("");
 const [year,setYear]=useState(2022);


 const [limit,setLimit]=useState(10);

 const getCars=async () =>{
  setLoading(true)
  try {
    const result=await fetchCars({
      manufacturer:manufacturer ||'',
      year:year ||2024,
      fuel:fuel ||'',
      limit:limit ||11,
      model:model||''
    });
    setAllcars(result);
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false)
  }
 }

 useEffect(()=>{
getCars();
 },[fuel,year,limit,manufacturer,model])

 
  const isDataEmpty=!Array.isArray(allCars)||allCars.length<1||!allCars;

  return ( 
  <main className="overflow-hidden">
<Hero  />
<div className="mt-13 padding-x padding-y max-width" id="discover">
<div className="home__text-container">
  <h1 className="text-4xl font-extrabold">
Car Vatalogue
  </h1>
  <p>Explore the car you like</p>
</div>
<div className="home__filters">
  <SearchBar 
  setManufacturer={setManufacturer}
  setModel={setModel}
  />
  <div className="home__filter-container">
<CustomFilter title='fuel' 
options={fuels}
setFilter={setFuel}
/>
<CustomFilter 
title='year' 
options={yearsOfProduction}
setFilter={setYear}
/>
  </div>
</div>
{allCars.length>0?(
<section>
  <div className="home__cars-wrapper">
    {allCars?.map(car=><CarCard car={car} key={allCars.indexOf(car)}/>)}
  </div>
{loading &&(
  <div className="mt-16 w-full flex-center">
    <Image
    src={'/loader.svg'}
    alt="loader"
    width={50}
    height={50}
    className="object-contain"
    />
  </div>
) }

  <ShowMore
pageNumber={(limit)/10}
isNext={limit>allCars.length}
setLimit={setLimit}
  />
</section>
):(
<div className="home__error-contianer">
<h2 className="text-black text-xl font-bold">OOps, no results</h2>
{/* <p>{allCars?.message}</p> */}
</div>
)}
</div>
  </main>
       
  );
}
