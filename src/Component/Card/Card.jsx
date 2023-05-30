import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
    const { name ,image , price , recipe} = item;

const {user} = useContext(AuthContext);

console.log('====================================');
console.log(user);
console.log('====================================');

const navigate = useNavigate();


    const handleAddToCart =(item)=>{
      if(user){
        fetch('http://localhost:5000/cart',{
          method: "POST",
          headers:{
            "content-type": "application/json",
          },
          body:JSON.stringify(item),
        })
        .then(res => res.json())
        .then(data => {
          console.log('====================================');
          console.log(data);
          console.log('====================================');
          if(data.insertedId){
            
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the food',
         
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login')
          }
        })
      }
      console.log(item);
    }





    // const showAlert = () => {
    //   Swal.fire({
    //     title: 'Hello!',
    //     text: 'This is a SweetAlert2 dialog.',
    //     icon: 'success',
    //     confirmButtonText: 'OK'
    //   });
    // };



  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <img className=" h-[400px] object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 m-4 px-3 bg-black text-white ">${price}</p>

        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p className="h-15">{recipe.slice(0,70)}...</p>
          
          <div className="card-actions justify-center">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-stone-200 border border-b-4 border-[#D99904] mt-4 ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
