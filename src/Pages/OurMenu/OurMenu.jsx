import MenuBanner from "../../Component/MenuBanner/MenuBanner";
import useTitle from "../../hooks/useTitle";
import image from "../../assets/menu/banner3.jpg";
import OfferMenu from "../../Component/OfferMenu/OfferMenu";
import Wrapper from "../../Component/Wrapper/Wrapper";


const OurMenu = () => {
    useTitle('Our Menu');
    return (
        <div>
            <MenuBanner
            img={image}
            heading={"OUR MENU"}
            description={
                "WOULD YOU LIKE TO TRY A DISH ?"
            }
            
            ></MenuBanner>

           <Wrapper className='py-6'>
           <OfferMenu></OfferMenu>
           </Wrapper>

            
        </div>
    );
};

export default OurMenu;