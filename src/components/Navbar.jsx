
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import {useState} from 'react'

function Navbar() {
    const [isOpen,setIsOpen] = useState(false) 


  return (
    <nav className='h-15 w-full px-8 xl:px-12 flex justify-between items-center bg-[#e9f7f1]'>
        <h1 className='text-xl font-semibold xl:text-2xl text-red-500 xl:font-bold'>ESSENCE</h1>
        <CiMenuFries onClick={() => {setIsOpen(!isOpen )}} className='text-xl font-bold cursor-pointer lg:hidden' />
            {isOpen && (
                <div className="h-115 w-50 bg-[#e9f7f1] absolute right-0 top-0 text-[18px] space-y-4 cursor-pointer pt-12  font-semibold z-10">
                    <ImCross onClick={() => {(setIsOpen(false))}} className="absolute top-5 right-5" />
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Home</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Services</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Features</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Works</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Pricing</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Team</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Blog</p>
                    <p className="hover:bg-[#c6d9d1] pl-5 pt-1 pb-1">Contact</p>
                    
                </div>
            )}

            <div className="hidden lg:flex gap-6 cursor-pointer font-semibold xl:gap-10 xl:text-[17px] xl:font-bold ">
              <p className="text-red-500">Home</p>
              <p className="hover:text-red-500 transition all duration-400">Services</p>
              <p className="hover:text-red-500 transition all duration-400">Features</p>
              <p className="hover:text-red-500 transition all duration-400">Works</p>
              <p className="hover:text-red-500 transition all duration-400">Pricing</p>
              <p className="hover:text-red-500 transition all duration-400">Team</p>
              <p className="hover:text-red-500 transition all duration-400">Blog</p>
              <p className="hover:text-red-500 transition all duration-400">Contact</p>
            </div>
 

      
    </nav>
  )
}

export default Navbar
