import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import Wrapper from "../Wrapper/Wrapper";
import './Featured.css'
import Button from "../Button/Button";

const Featured = () => {
  return (
    <Wrapper className='featured-item bg-fixed text-black pt-8 my-6 bg-slate-300 bg-opacity-25' >
      <div className="">

      
      <SectionTitle
        SubHeading={"---Check it out---"}
        heading={"FEATURED ITEM"}
      ></SectionTitle>
      <Wrapper>
                    <div className="flex-col md:flex-row flex justify-center items-center gap-10 py-14 lg:py-28">
                        <img className="md:w-6/12 h-auto rounded-sm" src={featuredImg} alt="" />
                        <div className="text-white md:w-6/12 space-y-2 text-center md:text-left">
                            <h5>March 20, 2023</h5>
                            <h4 className="font-bold text-lg">
                                WHERE CAN I GET SOME?
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error voluptate facere,
                                deserunt dolores maiores quod nobis quas quasi.
                                Eaque repellat recusandae ad laudantium tempore
                                consequatur consequuntur omnis ullam maxime
                                tenetur.
                            </p>
                            <Button className="border-2 border-l-0 border-r-0 border-transparent border-b-white text-white font-medium py-2 px-6 rounded-md transition-all hover:bg-white hover:text-primary hover:border-b-primary">
                              Read More
                            </Button>
                        </div>
                    </div>
                </Wrapper>
      </div>
    </Wrapper>
  );
};

export default Featured;
