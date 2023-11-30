import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {
    const products=[
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
        isNew:true,
        oldPrice:19,
        price:12,
      },
    ]
 return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
         
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>totalPrice</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;