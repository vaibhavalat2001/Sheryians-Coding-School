import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setResults,
  setActiveTab,
  setError,
  setLoading,
} from "../redux/features/searchSlice";
import { fetchPhotos, fetchPexelsPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  let dispatch = useDispatch();

  useEffect(
    function () {
      const getData = async () => {
        try {
          if (!query) return;
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let res = await fetchPexelsPhotos(query);
            console.log(res);
            data = res.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt,
              thumbnail: item.src.medium,
              src: item.src.medium,
              url: item.url
            }));
          }
          if (activeTab == "videos") {
            let res = await fetchVideos(query);
            data = res.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name,
              thumbnail: item.image,
              src: item.video_files[1].link,
              url: item.url,
            }));
          }
          if (activeTab == "gif") {
            let res = await fetchGif(query);
            data = res.results.map((item) => ({
              id: item.id,
              type: "gif",
              title: "GIF",
              thumbnail: item.media_formats.tinygif.url,
              src: item.media_formats.gif.url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [activeTab, query],
  );
  if (error) return <h1>Error</h1>;
  if (loading)
    return <h1 className="text-center sm:text-3xl max-sm:text-2xl">Loading</h1>;

  return (
    <div className="flex min-h-screen flex-wrap gap-5 px-5 pb-10 justify-between max-lg:justify-center ">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
