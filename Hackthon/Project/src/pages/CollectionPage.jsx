import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection, clearToast } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAllCollection = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };
  return (
    <div className="mt-18 min-h-screen">
        {collection.length > 0 ? (
          <div className="flex p-4 justify-between gap-6">
            <h2 className="text-2xl font-bold max-sm:text-lg">
              Your Collection
            </h2>
            <button
              onClick={() => {
                clearAllCollection();
              }}
              className="px-4 py-1 active:scale-90 max-sm:text-sm bg-red-500 rounded-xl"
            >
              Clear Collection
            </button>
          </div>
        ) : (
          <div className="flex justify-center py-10">
            <h2 className="text-3xl font-bold max-sm:text-2xl">Collection is Empty</h2>
          </div>
        )}
    
      <div className="flex  flex-wrap gap-5 px-5 p-5 justify-center max-lg:justify-center">
        {collection.map((item, idx) => {
          return <CollectionCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
