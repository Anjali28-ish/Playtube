import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../api/api'; // <-- use the api.js helper
import { setShortHistory, setVideoHistory } from '../redux/userSlice';

const GetHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Use api instance instead of axios
        const result = await api.get("/api/user/gethistory"); 
        const history = result.data;

        const Videos = history.filter((v) => v.contentType === "Video");
        const Shorts = history.filter((v) => v.contentType === "Short");

        dispatch(setVideoHistory(Videos));
        dispatch(setShortHistory(Shorts));

        console.log({ Videos, Shorts });
      } catch (error) {
        console.log("getHistory error:", error.response?.data || error.message);
        dispatch(setVideoHistory([]));
        dispatch(setShortHistory([])); // <-- fix duplicate dispatch
      }
    };

    fetchHistory();
  }, [dispatch]);
};

export default GetHistory;
