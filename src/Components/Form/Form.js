import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Form = () => {
  const { user } = useContext(AuthContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const number = form.number.value;
    const description = form.description.value;
    console.log(name, price, number, description);
    const addedProduct = {
      item: name,
      price: price,
      number: number,
      description: description,
      email: user.email,
    };
    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div class='flex justify-center items-center w-screen h-screen bg-white'>
        <div class='container mx-auto my-4 px-4 lg:px-20'>
          <form onSubmit={handleOnSubmit}>
            <div class='w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl'>
              <div class='flex'>
                <h1 class='font-bold uppercase text-5xl'>Add a product</h1>
              </div>
              <div class='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                <input
                  class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                  type='text'
                  placeholder='Name*'
                  name='name'
                />
                <input
                  class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                  type='number'
                  placeholder='Price*'
                  required
                  name='price'
                />
                <input
                  class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                  type='email'
                  placeholder={user.email}
                  disabled
                />
                <input
                  class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                  type='number'
                  placeholder='Phone*'
                  required
                  name='number'
                />
              </div>
              <input
                type='file'
                className='file-input file-input-bordered file-input-info w-full mt-4 max-w-lg'
              />
              <div class='my-4'>
                <textarea
                  required
                  placeholder='Description*'
                  name='description'
                  class='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'></textarea>
              </div>
              <div class='my-2 w-1/2 lg:w-1/4'>
                <button
                  class='uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
