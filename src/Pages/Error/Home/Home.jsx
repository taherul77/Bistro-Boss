
import Banner from "../../../Component/Banner/Banner";
import Category from "../../../Component/Category/Category";
import PopularMenu from "../../../Component/PopularMenu/PopularMenu";



const Home = () => {
  

    return (
        <div >
            <Banner></Banner>
            <div className="">
                <Category></Category>
            </div>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;