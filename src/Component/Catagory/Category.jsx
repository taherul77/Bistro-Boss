import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import slide6 from "../../assets/home/slide1.jpg";
import Wrapper from "../Wrapper/Wrapper";
const Category = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={true}
        pagination={{
          clickable: true,
          
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <h3 className="text-4xl text-center text-white -mt-16 uppercase">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Category;
