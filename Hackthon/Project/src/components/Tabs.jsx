import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  let tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch();
const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-5 p-8">
      {tabs.map(function (elem, ind) {
        return (
          <button onClick={() => dispatch(setActiveTab(elem))}
            className={`${activeTab === elem? 'bg-emerald-600':'bg-gray-700'} flex uppercase cursor-pointer active:scale-90 font-bold  rounded py-2 px-4`}
            key={ind}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
