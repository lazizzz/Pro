import Layout from "../../shared_components/Layout";
import React from "react";
import "../Styless/page.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Rasm Import
import Sam from "../Media/Sam-L.jpg";
// Detail About
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlinePencilAlt } from "react-icons/hi";
//
function AboutPage() {
  let params = useParams();
  const [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/persons/${params.gameId}`)
      .then(function (response) {
        // handle success
        setGame(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="Swiper_papa">
      
        {/* <Link to={`/About/update/${params.gameId}`}>
          <HiOutlinePencilAlt className="h-14 w-14 text-slate-700 text-right absolute right-0 m-10 cursor-pointer duration-200 active:scale-95" />
        </Link> */}
        {game != null && (
          <div className="flex flex-col justify-center items-center p-10 space-y-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={1000}
              slidesPerView={1}
              navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className=" w-full h-full "
            >
              <SwiperSlide className="  mb-5">
                <img
                  className="h-[300px] w-[400px] object-cover ml-center-add mt-0 rounded-lg"
                  src={game.imageURL}
                  alt="game image"
                />
                <h1 className="text-center font-bold text-5xl">{game.title}</h1>
                <p className="font-semibold text-lg text-center">{game.description}</p>
              </SwiperSlide>
              <SwiperSlide className=" w-full h-96 ml-10 mb-5">
              
                <img
                  className="h-[450px] w-[500px] object-cover ml-center-add mt-0 rounded-lg"
                  src={game.image_two}
                  alt="game image"
                />
              </SwiperSlide>
              <SwiperSlide className=" grid grid-cols-4 w-full h-96 mb-4">
              <iframe src="https://assets.pinterest.com/ext/embed.html?id=58335757664168329" height="393" width="236" frameborder="0" scrolling="no" ></iframe>
              <iframe src="https://assets.pinterest.com/ext/embed.html?id=23573598037401605" height="409" width="236" frameborder="0" scrolling="no" ></iframe>
              <iframe src="https://assets.pinterest.com/ext/embed.html?id=440508407311515503" height="413" width="236" frameborder="0" scrolling="no" ></iframe>
              <iframe src="https://assets.pinterest.com/ext/embed.html?id=211174967369286" height="446" width="236" frameborder="0" scrolling="no" ></iframe>

              <h1 className=" font-semibold text-2xl text-center  ">Boldi Tugadi!!!</h1>

              </SwiperSlide>
              
            </Swiper>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AboutPage;
