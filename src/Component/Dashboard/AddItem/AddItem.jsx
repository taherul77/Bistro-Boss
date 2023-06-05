import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Wrapper from "../../Wrapper/Wrapper";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token= import.meta.env.VITE_Image_Upload_token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){

                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
  return (
    <div className="w-full">
      <Wrapper>
        <SectionTitle SubHeading="What's New" heading="Add Item"></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select  defaultValue="Pick One" {...register("category", { required: true, maxLength: 120 })}  className="select  select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>pizza</option>
                  <option>salad</option>
                  <option>soup</option>
                  <option>drinks</option>
                  <option>dessert</option>
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  {...register("price", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("recipe", { required: true })}
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick a file*</span>
                
              </label>
              <input
               {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs mb-5"
              />
            
            </div>
            
            <input type="submit" className="btn bg-[#D1A054] " value="Add Item" />
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default AddItem;
