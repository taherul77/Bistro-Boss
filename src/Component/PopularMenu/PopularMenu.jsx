import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Wrapper from "../Wrapper/Wrapper";
import MenuItem from "./MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu ,setMenu] = useState([]);
   
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())    
        .then(data =>{
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)
        })    
    },[])
    return (
        <Wrapper>
            <SectionTitle
            SubHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            
            ></SectionTitle>
<div>
    {
        menu.map(item =>
         <MenuItem
         
         key = {item._id}
         
         item = {item}
         
         >
        </MenuItem>)
    }
</div>

            
        </Wrapper>
    );
};

export default PopularMenu;