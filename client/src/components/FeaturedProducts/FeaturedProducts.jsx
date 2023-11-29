import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";


const FeaturedProducts = () => {
const data=[
  {
  id:1,
  img:'https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img2:'https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title:'Long Sleve Graphic T-shirt',
  isNew:true,
  oldPrice:19,
  price:12,
},
{
  id:2,
  img2:'https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img:'https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title:'Long Sleve Graphic T-shirt',
  isNew:false,
  oldPrice:19,
  price:12,
},
{
  id:3,
  img:'https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img2:'https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title:'Long Sleve Graphic T-shirt',
  isNew:false,
  oldPrice:19,
  price:12,
},
{
  id:4,
  img2:'https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img:'https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title:'Long Sleve Graphic T-shirt',
  isNew:true,
  oldPrice:19,
  price:12,
}
]

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
       {data.map(item=>(
        <Card item={item} key={item.id}/>
       ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;