import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import Wrapper from "../Wrapper/Wrapper";
import './Featured.css'

const Featured = () => {
  return (
    <Wrapper className='featured-item bg-fixed text-black pt-8 my-6 bg-slate-300 bg-opacity-25' >
      <div className="">

      
      <SectionTitle
        SubHeading={"---Check it out---"}
        heading={"FEATURED ITEM"}
      ></SectionTitle>
      <div  className="flex col-span-12 md:col-span-6 justify-center bg-slate-300 bg-opacity-40  items-center py-16 px-36 gap-4">
        <div>
          <img className="rounded-xl" src={featuredImg} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            obcaecati placeat molestias aperiam, repellat nesciunt vitae nihil
            odio accusantium, ex, facilis voluptate nulla consequatur totam
            consequuntur deleniti harum iure ipsa?
          </p>
          <button className="btn btn-outline border border-b-4 text-black">Order Now</button>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Featured;
