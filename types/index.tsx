import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface customButtonProps{
    title:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button"|"submit",
    textStyles?:string,
    rightIcon?:string
}
export interface optionProps{
    title:string,
    value:string
}
export interface customFilterProps{
    title:string,
    options:optionProps[],
    setFilter: Dispatch<SetStateAction<any>>
}
export interface searchManufacturerProps{
    selected:string,
    setSelected:(value: string) => void;
}

export interface carsProps{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive:string,
    fuel_type:string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}
export interface carDetailsProp{
    isOpen:boolean,
    closeModal:()=>void,
    car:carsProps
}
export interface FilterProps{
    manufacturer:string,
    year:number,
    fuel:string,
    limit:number,
    model:string
}
export interface HomeProps{
    searchParams:FilterProps
}
export interface showMoreProps{
    pageNumber:number,
    isNext:boolean,
    setLimit:Dispatch<SetStateAction<number>>
}

export interface SearchBarProps{
    setModel:Dispatch<SetStateAction<string>>,
    setManufacturer:Dispatch<SetStateAction<string>>
}