"use client";
import { customButtonProps } from "@/types";
import Image from "next/image"

export default function CustomButton({title,containerStyles,handleClick}:customButtonProps) {
    console.log(containerStyles);
  return (
    <button 
    disabled={false}
    type={`button`}
    className={`custom-btn ${containerStyles||""}!important`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}
