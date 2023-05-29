import MenuBanner from "../../Component/MenuBanner/MenuBanner";
import Order from "../../Component/Order/Order";
import Wrapper from "../../Component/Wrapper/Wrapper";
import image from "../../assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <MenuBanner
        img={image}
        heading={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></MenuBanner>
      <Wrapper>
      <Order></Order>
      </Wrapper>
    </div>
  );
};

export default OurShop;
