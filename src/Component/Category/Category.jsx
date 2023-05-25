import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import Wrapper from "../Wrapper/Wrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
const Category = () => {
  const categories = [
    {
      img: slide1,
      title: "Salads",
    },
    {
      img: slide2,
      title: "Pizzas",
    },
    {
      img: slide3,
      title: "Soups",
    },
    {
      img: slide4,
      title: "Desserts",
    },
    {
      img: slide5,
      title: "Salads",
    },
  ];

  return (
    <Wrapper>
      <SectionTitle
        SubHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          324: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-12"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={category.img} alt="" />
            <p className="text-2xl text-white uppercase absolute bottom-3 left-1/2 transform -translate-x-1/2">
              {category.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Category;
