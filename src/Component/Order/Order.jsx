import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import Card from "../Card/Card";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu, loading] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <Tabs
      className="items-center"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>

        {
          loading?<div className="flex justify-center"><span className=" loading loading-spinner text-success"></span></div>:<div className="grid grid-cols-12 lg:grid-cols-3 gap-5 py-8">
          {salad.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        }
        
      </TabPanel>
      <TabPanel>
        {
          loading?<span className="loading loading-spinner text-success"></span>:<div className="grid grid-cols-12 lg:grid-cols-3 gap-5 py-8">
          {pizza.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        }
        
      </TabPanel>
      <TabPanel>
        {
          loading?<span className="loading loading-spinner  text-success"></span>:<div className="grid grid-cols-12 lg:grid-cols-3 gap-5 py-8">
          {soup.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        }
        
      </TabPanel>
      <TabPanel>
        {
          loading?<span className="loading loading-spinner text-success"></span>:<div className="grid grid-cols-12 lg:grid-cols-3 gap-5 py-8">
          {dessert.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        }
        
      </TabPanel>
      <TabPanel>
        {
          loading?<span className="loading loading-spinner text-success"></span>:<div className="grid grid-cols-12 lg:grid-cols-3 gap-5 py-8">
          {drinks.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        }
        
      </TabPanel>
    </Tabs>
  );
};

export default Order;
