import React, { useEffect, useState } from "react";

import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const Product = () => {
  const id = useParams().id;
  const [selectedImg,setSelectedImg]= useState("img");
  const [quantity,setQuantity]= useState(1)
 const {data,loading,error} =useFetch(
  `/products/${id}?populate=*`
 )


 const imgSrc = data?.attributes?.[selectedImg]?.data?.attributes?.url;
  return (
    <div className="product">
   {loading ?'loading...':(<>
          <div className="left">
            <div className="images">
              <img
                src={import.meta.env.VITE_API_UP_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
              onClick={(e)=>setSelectedImg("img")}
              />
              <img
                src={import.meta.env.VITE_API_UP_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e)=>setSelectedImg("img2")}
              />
             
            </div>
            <div className="mainImg">
            <img src={import.meta.env.VITE_API_UP_URL + imgSrc} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
               onClick={()=>setQuantity((prev)=>(prev === 1 ? 1 : prev-1))}
              >
                -
              </button>
              {quantity}
              <button  onClick={()=>setQuantity((prev)=>prev+1)} >+</button>
            </div>
            <button
              className="add"
             
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: the client</span>
             
             
              <h3 >Product Type: {data?.attributes?.sub_categories?.data?.[0]?.attributes?.title ?? "Product"}</h3>
              <h3>
                Tag: {data?.attributes?.sub_categories?.data?.[0]?.attributes?.title ?? "Product"}, 
                {data?.attributes?.categories?.data?.[0]?.attributes?.title ?? "Any"},  
                {data?.attributes?.types}
              </h3>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          </>) }
    
    </div>
  );
};

export default Product;