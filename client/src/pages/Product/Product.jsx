import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const imgSrc = data?.attributes?.[selectedImg]?.data?.attributes?.url;

  return (
    <section className="flex justify-center">
    <div className="flex max-w-[2000px] flex-col md:flex-row items-start md:items-center gap-8 p-4 md:p-8">
    
      {loading ? (
        "Loading..."
      ) : (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 max-w-6xl mx-auto py-8 px-4 md:px-0">
         
            <div className="grid grid-cols-2 md:grid-cols-1  gap-4">
              <img
                src={import.meta.env.VITE_API_UP_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-all hover:scale-105"                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={import.meta.env.VITE_API_UP_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-all hover:scale-105"
                                onClick={(e) => setSelectedImg("img2")}
              />
                           
                            </div>
                            <div className=" md:w-[600px] md:h-[800px] overflow-hidden rounded-lg">
          <img src={import.meta.env.VITE_API_UP_URL + imgSrc} alt=""   className="w-full h-auto object-contain"/>
          </div>
            </div>
           
        
          <div className="flex flex-col gap-4 flex-grow">
            <h1 className="text-2xl md:text-3xl font-bold">{data?.attributes?.title}</h1>
            <span className="text-lg md:text-xl font-semibold text-blue-500">{data?.attributes?.price}</span>
            <p className="text-base">{data?.attributes?.desc}</p>
            <div className="flex items-center gap-4">
              <button
                className="w-12 h-12 bg-gray-200 flex items-center justify-center"
                onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="w-12 h-12 bg-gray-200 flex items-center justify-center"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="flex items-center justify-center  gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
              onClick={() =>
                dispatch(
                  addTocart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-500 text-sm">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="flex items-center gap-2 text-blue-500 text-sm">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="flex flex-col gap-4 text-gray-500 text-sm mt-4">
              <span>Vendor: the client</span>
              <h3>Product Type: {data?.attributes?.sub_categories?.data?.[0]?.attributes?.title ?? "Product"}</h3>
              <h3>
                Tag:{" "}
                {data?.attributes?.sub_categories?.data?.[0]?.attributes?.title ?? "Product"},{" "}
                {data?.attributes?.categories?.data?.[0]?.attributes?.title ?? "Any"}, {data?.attributes?.types}
              </h3>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-col gap-4 text-gray-500 text-sm">
              <span>DESCRIPTION</span>
              <hr className="border-gray-200" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="border-gray-200" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div></section>
  );
};

export default Product;
