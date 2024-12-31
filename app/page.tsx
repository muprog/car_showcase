import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utilis";
import Image from "next/image";

export default async function Home({searchParams}:HomeProps) {
  const allCars=await fetchCars({
    manufacturer:searchParams.manufacturer ||'',
    year:searchParams.year ||2024,
    fuel:searchParams.fuel ||'',
    limit:searchParams.limit ||11,
    model:searchParams.model||''
  });
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
  <SearchBar />
  <div className="home__filter-container">
<CustomFilter title='fuel' options={fuels}/>
<CustomFilter title='year' options={yearsOfProduction}/>
  </div>
</div>
{!isDataEmpty?(
<section>
  <div className="home__cars-wrapper">
    {allCars?.map(car=><CarCard car={car} key={allCars.indexOf(car)}/>)}
  </div>
</section>
):(
<div className="home__error-contianer">
<h2 className="text-black text-xl font-bold">OOps, no results</h2>
<p>{allCars?.message}</p>
</div>
)}
</div>
  </main>
       
  );
}
