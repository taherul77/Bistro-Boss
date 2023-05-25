
import Banner from "../../../Component/Banner/Banner";
import Category from "../../../Component/Category/Category";
import Featured from "../../../Component/Featured/Featured";
import PopularMenu from "../../../Component/PopularMenu/PopularMenu";
import ViewFoodChemistry from "../../../Component/ViewFoodChemistry/ViewFoodChemistry";



const Home = () => {
  

    return (
        <div >
            <Banner></Banner>
            <div className="">
                <Category></Category>
            </div>
            <ViewFoodChemistry></ViewFoodChemistry>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;