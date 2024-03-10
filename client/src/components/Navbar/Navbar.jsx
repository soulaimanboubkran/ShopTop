import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


const Navbar = () => {
 const [open,setOpen]= useState(false)
 const products = useSelector((state) => state.cart.products);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    

<header className="bg-white">
<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div className="flex lg:flex-1">
    <Link to='/' className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
    </Link>
  </div>
  
  <div className="flex lg:hidden">
  <div onClick={()=>setOpen(!open)} >
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(true)}
    >
      <span className="sr-only">Open main menu</span>
      =
    </button>
    
  </div>
  
  <Popover.Group className="hidden lg:flex lg:gap-x-12">
   

   
    <Link className="text-sm font-semibold leading-6 text-gray-900" to="/products/1">Women</Link>
   
    <Link className="text-sm font-semibold leading-6 text-gray-900" to="/products/2">Men</Link>
 
  </Popover.Group>
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <div onClick={()=>setOpen(!open)} >
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
  </div>
</nav>
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-10" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Close menu</span>
      x
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
         
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/products/1">Women</Link>
   
   <Link className="text-sm font-semibold leading-6 text-gray-900" to="/products/2">Men</Link>
        </div>
        <div className="py-6">
        
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>
</header>
{open && <Cart/>}
</>
  );
};

export default Navbar;