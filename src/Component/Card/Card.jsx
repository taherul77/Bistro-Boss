const Card = ({item}) => {
    const { name ,image , price , recipe} = item;
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <img className=" object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 m-4 px-3 bg-black text-white ">${price}</p>

        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-stone-200 border border-b-4 border-[#D99904] mt-4 ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
