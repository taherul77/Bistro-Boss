

const MenuItem = ({item}) => {
    const { image, price, name, recipe} = item;
    
    return (
        <div className="flex col-span-12 lg:col-span-6  gap-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="h-auto object-cover w-[100px] bg-slate-200 " src={image} alt="" />
            <div>
                <h3 className="uppercase text-black">{name}------------------------------</h3>
                <p className="text-black">{recipe}</p>
            </div>
            <p className="text-[#D99904]">${price}</p>  
        </div>
    );
};

export default MenuItem;