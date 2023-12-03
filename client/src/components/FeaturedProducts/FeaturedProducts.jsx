import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from 'axios'

const FeaturedProducts = () => {


const [Products,setProducts]=useState([])

useEffect(()=>{
const fetchData=async()=>{
   try {
   
    const res = await axios.get(
      import.meta.env.VITE_API_URL + '/categories',
    {
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_SHOPApi,
      },
      
    })
    
 console.log(res.data.data)
    
  } catch (error) {
    console.log(error)
  }
}
fetchData()


},[])


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>type products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
      
      </div>
    </div>
  );
};

export default FeaturedProducts;