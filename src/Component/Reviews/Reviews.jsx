import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Wrapper from "../Wrapper/Wrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Wrapper>
      <SectionTitle
        SubHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} autoplay={true} modules={[Navigation ,Autoplay]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center my-10 mx-20">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <div className="text-black py-6">
                <p>{review.details}</p>
                <h3 className="text-2xl text-[#D99904]">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Reviews;
