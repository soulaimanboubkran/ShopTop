import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row rounded-xl">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/6">
              Sale
            </Link>
          </button>
        </div>
        <div className="row rounded-xl">
          <img
            src="https://media.istockphoto.com/id/1867477309/photo/full-length-photo-of-pretty-cheerful-person-hold-boutique-bags-indicate-finger-empty-space-ad.jpg?s=612x612&w=0&k=20&c=sOOfepAHnaaZT3nDaa_OUQDk9ykH4szSdtgkTPNmpY0="
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row rounded-xl">
          {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="items-center">
            <Link to="/products/5" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row rounded-xl">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row rounded-xl">
              {" "}
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/11/09/woman-1869116_1280.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/4" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row rounded-xl">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/13/38/alone-1869914_1280.jpg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/3" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;