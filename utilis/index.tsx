import { carsProps } from "@/types";
import axios from "axios"
import { FilterProps } from "@/types";
import { manufacturers } from "@/constants";
export async function fetchCars(filters:FilterProps) {
    try {
        const {manufacturer,year,model,limit,fuel}=filters
        const response=await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
            headers:{
                'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
                'x-rapidapi-key': '8527dff085msh77e8cd742bf2e8fp1ea95fjsnfcbc6627c32a',
                "Content-Type":"application/json"
                   }

     
        })
        
        const result=await response?.data;
        return result;
    } catch (error) {
        console.log(error)
    }
   
}

export const calculateCarRent=(city_mpg:number,year:number)=>{
    try {
        const basePricePerDay=50;
        const mileageFactor=0.1;
        const ageFactor=0.05;
        const mileageRate=city_mpg*mileageFactor;
        const ageRate=(new Date().getFullYear()-year)*ageFactor;
        const rentalRatePerDay=basePricePerDay+mileageRate+ageRate;
         return rentalRatePerDay.toFixed(0)
    } catch (error) {
        console.log(error)
    }
   
}

export const generateCarImageUrl=(car:carsProps,angle?:string)=>{
    //key ...
    try {
        const url=new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model}=car
    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear',`${year}`)
    url.searchParams.append('angle',`${angle}`)

    return `${url}`
    } catch (error) {
        console.log(error)
    }
    
}
export const updateSearchParams=(type:string,value:string)=>{
    const searchParams=new URLSearchParams(window.location.search);
  
    searchParams.set(type,value)
  
  const newPathname=`${window.location.pathname}?${searchParams.toString()}`
  
  return newPathname;
}