import Link from "next/link";
import React from "react";



function Logo() {
  return (
    
    <Link
    
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-indigo-200 to-cyan-300 text-transparent bg-clip-text hover:cursor-pointer flex"
    >
        
         Myforms 
    </Link>
    
  );
}

export default Logo;
