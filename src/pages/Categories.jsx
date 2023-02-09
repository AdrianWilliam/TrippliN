import React, { useEffect } from "react";
import { Pagination, Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import {
  allCategories,
  autos,
  eletronics,
  forHome,
  sports,
  musicAndHobbies,
  fashionAndBeauty,
  agroAndBusiness,
} from "../store/reducer/Categorie";

import "./Categories.css";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  BsFillGrid1X2Fill as AllCategories,
  BsHouseDoor as ForHome,
  BsMusicNoteBeamed as MusicAndHobbies,
  BsShop as AgroAndBusiness,
} from "react-icons/bs";
import {
  AiOutlineSkin as FashionAndBeauty,
  AiOutlineDribbble as Sports,
  AiOutlineLaptop as Eletronic,
  AiOutlineCar as Autos,
} from "react-icons/ai";

function Categories() {
  const dispatch = useDispatch();
  return (
    <Swiper
      modules={[Pagination, Mousewheel, Scrollbar]}
      spaceBetween={50}
      slidesPerView={4}
      mousewheel
      scrollbar={{ draggable: true }}
      breakpoints={{ 760: { slidesPerView: 5 }, 1024: { slidesPerView: 10 } }}
    >
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(allCategories())}
        >
          <AllCategories />
        </div>
        <p>All Categories</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(autos())}
        >
          <Autos />
        </div>
        <p>Autos</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(eletronics())}
        >
          <Eletronic />
        </div>
        <p>Eletronic</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(forHome())}
        >
          <ForHome />
        </div>
        <p>For Home</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(sports())}
        >
          <Sports />
        </div>
        <p>Sports</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(musicAndHobbies())}
        >
          <MusicAndHobbies />
        </div>
        <p>Music and Hobbies</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(fashionAndBeauty())}
        >
          <FashionAndBeauty />
        </div>
        <p>Fashion and Beauty</p>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="containerImgCategorie"
          onClick={() => dispatch(agroAndBusiness())}
        >
          <AgroAndBusiness />
        </div>
        <p>Agro and Business</p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Categories;
