import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Wrapper from "../Wrapper/Wrapper";
import MenuItem from "./MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <Wrapper className={'mb-12'}>
      <SectionTitle
        SubHeading={"---Popular Items---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-12 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </Wrapper>
  );
};

export default PopularMenu;
