import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../api/api";   // 👈 api.js import
import { setRecommendedContent } from "../redux/userSlice";

const GetRecommendedContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecommendedContent = async () => {
      try {
        const result = await api.get("/api/user/recommendation"); 
        // 👆 token + baseURL automatically attach hoga

        dispatch(setRecommendedContent(result.data || []));
        console.log("Recommended content:", result.data);
      } catch (error) {
        console.error(
          "GetRecommendedContent error:",
          error.response?.data || error.message
        );
        dispatch(setRecommendedContent([]));
      }
    };

    fetchRecommendedContent();
  }, [dispatch]);

  return null;
};

export default GetRecommendedContent;
