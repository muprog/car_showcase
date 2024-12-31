"use client";
import { customButtonProps } from "@/types";
import Image from "next/image"

export default function CustomButton({title,containerStyles,handleClick,btnType,textStyles,rightIcon}:customButtonProps) {
    
  return (
    <button 
    disabled={false}
    type={btnType||"button"}
    className={`custom-btn ${containerStyles} ${textStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon"
          fill
          className="object-contain"
          />
        </div>
      )}
    </button>
  )
}
