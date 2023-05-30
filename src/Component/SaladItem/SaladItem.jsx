import { useEffect, useState } from "react";
import MenuItem from "../PopularMenu/MenuItem/MenuItem";
import Button from "../Button/Button";


const SaladItem = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
          const popularItem = data.filter((item) => item.category === "salad");
          setMenu(popularItem);
        });
    }, []);


    return (
        <div className="grid grid-cols-12 gap-5 py-8">
        {
            menu.map((item) =><MenuItem key={item._id} item={item}></MenuItem>
                   )
        }
        <Button className="border-2 border-l-0 border-r-0 border-transparent border-b-white text-white font-medium py-2 px-6 rounded-md transition-all hover:bg-white hover:text-primary hover:border-b-primary">
          Read More
        </Button>
    </div>
    );
};

export default SaladItem;