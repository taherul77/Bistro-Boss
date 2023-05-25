
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import Featured from "../../Component/Featured/Featured";
import PopularMenu from "../../Component/PopularMenu/PopularMenu";
import Reviews from "../../Component/Reviews/Reviews";
import ViewFoodChemistry from "../../Component/ViewFoodChemistry/ViewFoodChemistry";
import useTitle from "../../hooks/useTitle";



const Home = () => {
  
useTitle('Home')
    return (
        <div >
            <Banner></Banner>
            <div className="">
                <Category></Category>
            </div>
            <ViewFoodChemistry></ViewFoodChemistry>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;