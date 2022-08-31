import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { GameContext } from "../../utilities/gameContext";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Cart() {
     //useEffect AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
//   
  const { gameCart } = useContext(GameContext);
  function allTotal() {
    let sum = 0;
    gameCart.map((arr) => (sum += arr.price));
    return sum;
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-x-5 ">
        {gameCart.map((gameInCart) => (
          <div  data-aos="flip-up" key={gameInCart.id} className="card w-[350px] h-[500px] ml-10 shadow-2xl my-10 korz-bg rounded-lg">
            <div className="card-header mx-3 mt-12">
              <img
                className="w-[450px] h-[300px] rounded-lg object-cover"
                src={gameInCart.imageURL}
                alt="tailwind-card-image"
              />
            </div>
            <div className="card-body">
              <a href="#">
                <h4 className="font-semibold ml-4 korz-txt text-lg">{gameInCart.title}</h4>
              </a>
              <p className="opcacity-60 mb-4 ml-4 line-clamp-3 korz-txt font-semibold">
                {gameInCart.description}
              </p>
              {/* <p className=" font-bold mb-5">{gameInCart.price}$</p> */}
              <Link
                to={`/game/${gameInCart.id}`}
                className="button bg-green-500 text-white  ml-4 rounded-lg"
              >
                <button className="w-24">
                     Read More
                </button>
               
              </Link>
              {/* <button className= "text-2xl bg-black text-white  p-2" type="submit">delete</button> */}
            </div>
          </div>
        ))}
        <h1 className="text-3xl border-2 border-green-500 w-[250px]  px-4 py-2 rounded-xl bg-green-500 text-white font-bold  fixed right-0 bottom-0">
          Total: {allTotal()}$
        </h1>
      </div>
    </Layout>
  );
}

export default Cart;
