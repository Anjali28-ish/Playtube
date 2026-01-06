import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api"; // 👈 api instance
import { setUserData } from "../redux/userSlice";

const GetCurrentUser = () => {
  const dispatch = useDispatch();
  const { channelData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await api.get("/api/user/getuser");
        // 👆 Authorization header auto attach hoga

        dispatch(setUserData(result.data));
        console.log("Current user:", result.data);
      } catch (error) {
        console.error(
          "GetCurrentUser error:",
          error.response?.data || error.message
        );
        dispatch(setUserData(null));
      }
    };

    fetchUser();
  }, [dispatch, channelData]);

  return null;
};

export default GetCurrentUser;
