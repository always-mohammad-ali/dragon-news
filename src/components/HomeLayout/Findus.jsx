import React from "react";
import { MdFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";


const Findus = () => {
  return (
    <div className="bg-white my-10 border-1 border-gray-200">
      <div className="join join-vertical p-5 ">
        
        <div className="flex gap-3 items-center "> 
            <MdFacebook className="text-3xl text-blue-500"></MdFacebook>
            <button className=" join-item text-secondary cursor-pointer"> Facebook</button>
        </div>
        

        <div className="flex gap-3 items-center my-4"> 
            <RiTwitterXLine className="text-3xl "></RiTwitterXLine>
            <button className=" join-item text-secondary cursor-pointer"> Twitter</button>
        </div>

        <div className="flex gap-3 items-center "> 
            <FaInstagramSquare className="text-3xl text-cyan-300"></FaInstagramSquare>
            <button className="join-item text-secondary cursor-pointer"> Instagram</button>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Findus;
