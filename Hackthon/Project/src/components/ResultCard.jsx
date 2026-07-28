import { useDispatch } from "react-redux";
import { addCollection, addToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const collectCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast());
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden relative xl:w-[18vw] max-xl:w-[25vw] max-lg:w-[30vw] max-md:w-[40vw] h-80 max-sm:w-[39vw] max-sm:h-60">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            src={item.src}
            autoPlay
            muted
            loop
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>

      <div
        id="title"
        className="w-full gap-2 px-4 py-4 flex justify-between items-start absolute bottom-0 text-white"
      >
        <h2 className="font-semibold h-11 overflow-hidden sm:text-lg max-sm:text-sm capitalize">
          {item.title}
        </h2>
        <button
          onClick={() => {
            collectCollection(item);
          }}
          className="bg-purple-600 cursor-pointer hover:text-bold hover:text-emerald-400 active:scale-80 px-2 sm:py-0 py-1 sm:text-lg max-sm:text-sm rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
