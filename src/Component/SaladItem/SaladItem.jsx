import { useEffect, useState } from "react";
import MenuItem from "../PopularMenu/MenuItem/MenuItem";


const SaladItem = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const popularItem = data.filter((item) => item.category === "pizza");
          setMenu(popularItem);
        });
    }, []);


    return (
        <div className="grid grid-cols-12 gap-5 py-8">
        {
            menu.map((item) =><MenuItem key={item._id} item={item}></MenuItem>
                   )
        }
    </div>
    );
};

export default SaladItem;