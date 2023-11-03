import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import ProductCart from "../components/ProductCart";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center">
      {" "}
      {products && products.map((prd, i) => <ProductCart key={i} prd={prd} />)}
    </div>
  );
};

export default Home;
