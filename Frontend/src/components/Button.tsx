
import type { ReactElement } from "react";
interface ButtonProps {
    variant: "primary"| "secondary";
    text: string;
    startIcon: ReactElement;
}

const variantClasses = {
    "primary":"bg-[var(--color-purple-600)] text-[#ffffff] ...",
    "secondary":"bg-[var(--color-purple-200)] text-[#7164c0] ..."
}

const defaultStyles = "px-4 px-2 rounded-md font-light flex items-center";

export function Button({variant,text,startIcon}: ButtonProps){
    return <button className ={variantClasses[variant] + "" +
        defaultStyles} >
            <div className = "pr-2">
                {startIcon}
                </div> 
        {text}
    </button>
}