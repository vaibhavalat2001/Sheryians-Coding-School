import { useRef, useState } from "react";

const Form = ({ setUser }) => {
  console.log("form Rendering....");

  let formRef = useRef({});
  let handleSubmit = (e) => {
    e.preventDefault();
    setUser((pre) => [...pre, formRef.current]);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-100 rounded p-6 flex flex-col gap-6 bg-white text-black"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          // onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          // onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="number"
          placeholder="Price"
        />
        <select
          ref={(e) => (formRef.current.cat = e)}
          name=""
          id=""
          className="border-2 border-gray-400 py-1 rounded text-xl"
        >
          <option value="">Select Category:</option>
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.img = e)}
          // onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="text-2xl bg-blue-600 rounded text-white">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
