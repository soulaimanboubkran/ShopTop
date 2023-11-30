import React, { useState } from "react";

import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import { useParams } from "react-router-dom";


const Product = () => {
  const id = useParams().id;
  const [selectedImg,setSelectedImg]= useState(0);
  const [quantity,setQuantity]= useState(1)
  const images = [
    'https://images.unsplash.com/photo-1701244450186-cf76378d4c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1698778755371-c98c0f38ef74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
    
  ]

  return (
    <div className="product">
   
          <div className="left">
            <div className="images">
              <img
                src={images[0]}
                alt=""
              onClick={e=>setSelectedImg(0)}
              />
              <img
                src={images[1]}
                alt=""
                onClick={e=>setSelectedImg(1)}
              />
              <img
                src={images[2]}
                alt=""
                onClick={e=>setSelectedImg(2)}
              />
            </div>
            <div className="mainImg">
              <img
                src={images[selectedImg]}
                alt=""
             
              />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className="price">Price</span>
            <p>Description</p>
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
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
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
     
    
    </div>
  );
};

export default Product;