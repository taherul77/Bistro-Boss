import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../PopularMenu/MenuItem/MenuItem";

const OfferMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "offered");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        SubHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

      <div className="grid grid-cols-12 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default OfferMenu;
