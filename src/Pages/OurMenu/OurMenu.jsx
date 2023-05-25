import MenuBanner from "../../Component/MenuBanner/MenuBanner";
import useTitle from "../../hooks/useTitle";
import image from "../../assets/menu/banner3.jpg";
import OfferMenu from "../../Component/OfferMenu/OfferMenu";
import Wrapper from "../../Component/Wrapper/Wrapper";
import BannerMenu from "../../Component/BannerMenu/BannerMenu";
import menuImage from "../../assets/home/chef-service.jpg";
import DessertItem from "../../Component/DessertItem/DessertItem";
import PizzaItem from "../../Component/PizzaItem/PizzaItem";

const OurMenu = () => {
  useTitle("Our Menu");
  return (
    <div>
      <MenuBanner
        img={image}
        heading={"OUR MENU"}
        description={"WOULD YOU LIKE TO TRY A DISH ?"}
      ></MenuBanner>

      <Wrapper className="py-6">
        <OfferMenu></OfferMenu>
      </Wrapper>
      <div>
        <BannerMenu
          img={menuImage}
          heading={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></BannerMenu>
        <div>
          <Wrapper>
            <DessertItem></DessertItem>
          </Wrapper>
        </div>
      </div>
      <div>
        <BannerMenu
          img={menuImage}
          heading={"PIZZA"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></BannerMenu>
        <div>
          <Wrapper>
            <PizzaItem></PizzaItem>
          </Wrapper>
        </div>
      </div>
      
    </div>
  );
};

export default OurMenu;
