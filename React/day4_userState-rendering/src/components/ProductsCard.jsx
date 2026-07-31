import React from "react";

const ProductsCard = ({ product, del }) => {
  return (
    <div className="text-white p-4">
      {/* {productsData.map((ele) => (
        <h1>{ele.price}</h1>
      ))} */}
      <div className="border-2 w-50 rounded-xl p-1 flex flex-col gap-3">
        <div className="flex justify-center">
          <img
            className="rounded-xl w-45 h-40 object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="px-2">
          <h2 className="font-bold">{product.title.substring(0, 17)}</h2>
          <p>{product.category}</p>
          <p className="text-green-400">{product.price}</p>
        </div>
        <button
          onClick={() => del(product.id)}
          className="active:scale-90 cursor-pointer border-2 px-2 py-1 rounded-xl bg-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
