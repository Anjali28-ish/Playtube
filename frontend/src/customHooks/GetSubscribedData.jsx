import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../api/api"; // <-- use api.js
import {
  setSubscribedChannels,
  setSubscribedVideos,
  setSubscribedShorts,
  setSubscribedPlaylists,
  setSubscribedPosts,
} from "../redux/userSlice";

function GetSubscribedData() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubscribedData = async () => {
      try {
        const result = await api.get("/api/user/subscribed-data"); // <- api.js handles token

        console.log("Subscribed data:", result.data);

        dispatch(setSubscribedChannels(result.data.subscribedChannels || []));
        dispatch(setSubscribedVideos(result.data.videos || []));
        dispatch(setSubscribedShorts(result.data.shorts || []));
        dispatch(setSubscribedPlaylists(result.data.playlists || []));
        dispatch(setSubscribedPosts(result.data.posts || []));
      } catch (error) {
        console.error(
          "GetSubscribedData error:",
          error.response?.data || error.message
        );

        // Reset state in case of error
        dispatch(setSubscribedChannels([]));
        dispatch(setSubscribedVideos([]));
        dispatch(setSubscribedShorts([]));
        dispatch(setSubscribedPlaylists([]));
        dispatch(setSubscribedPosts([]));
      }
    };

    fetchSubscribedData();
  }, [dispatch]);

  return null;
}

export default GetSubscribedData;

