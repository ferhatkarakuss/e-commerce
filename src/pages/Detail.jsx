import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { productCard } from "../redux/actions/Cart";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  const addCard = () => {
    dispatch(productCard(id));
    dispatch({ type: "DRAWER", payload: true });
  };
  return (
    <div className="w-full flex items-center justify-center space-x-5">
      <img className="w-1/3" src={product.image} alt="" />
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{product.title}</div>
        <div className="opacity-70 ">{product.description}</div>
        <div className="opacity-70 ">Category: {product.category}</div>
        <div className="font-bold text-lg ">Price: {product.price}</div>
        <button
          onClick={addCard}
          className="p-3 text-center rounded-lg text-white bg-indigo-600 w-1/2 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
