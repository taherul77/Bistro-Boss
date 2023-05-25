import ViewBanner from "../ViewBanner/ViewBanner";
import Wrapper from "../Wrapper/Wrapper";
import Img from '../../assets/home/chef-service.jpg'



const ViewFoodChemistry = () => {
    return (
        <div>
            <Wrapper>
                <ViewBanner
                  img={Img}
                  heading={"FOOD CHEMISTRY"}
                  description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                  }
                 
                
                
                ></ViewBanner>
            </Wrapper>
            
        </div>
    );
};

export default ViewFoodChemistry;