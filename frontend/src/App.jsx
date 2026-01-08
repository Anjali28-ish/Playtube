import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CustomAlert, { showCustomAlert } from "./components/CustomAlert";
import Shorts from "./pages/Shorts/Shorts";
import GetCurrentUser from "./customHooks/GetCurrentUser";
import MobileProfile from "./components/MobileProfile";
import ForgotPassword from "./pages/ForgotPassword";
import CreateChannel from "./pages/Channel/CreateChannel";
import ViewChannel from "./pages/Channel/ViewChannel";
import GetChannelData from "./customHooks/GetChannelData";
import UpdateChannel from "./pages/Channel/UpdateChannel";
import CreatePage from "./pages/CreatePage";
import CreateVideo from "./pages/Videos/CreateVideo";
import CreateShort from "./pages/Shorts/CreateShort";
import CreatePlayList from "./pages/PlayList/CreatePlayList";
import CreatePost from "./pages/Post/CreatePost";
import GetAllContentData from "./customHooks/GetAllContentData";
import PlayVideo from "./pages/Videos/PlayVideo";
import ChannelPage from "./pages/Channel/ChannelPage";
import PlayShort from "./pages/Shorts/PlayShort";
import LikedContent from "./pages/LikedContent";
import SavedContent from "./pages/SavedContent";
import SavedPlaylist from "./pages/PlayList/SavedPlaylist";
import GetSubscribedData from "./customHooks/GetSubscribedData";
import Subscription from "./pages/Subscription";
import GetHistory from "./customHooks/GetHistory";
import HistoryContent from "./pages/HistoryContent";
import GetRecommendedContent from "./customHooks/GetRecommendedContent";
import Revenue from "./components/Revenue";
import Content from "./components/Content";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import PTStudio from "./pages/PTStudio";
import UpdateVideo from "./pages/Videos/UpdateVideo";
import UpdateShort from "./pages/Shorts/UpdateShort";
import UpdatePlaylist from "./pages/PlayList/UpdatePlaylist";


export const serverUrl = "https://playtube-backend-s0xx.onrender.com";

/* ================= PROTECTED ROUTE ================= */
const ProtectRoute = ({ userData, children }) => {
  if (!userData) {
    showCustomAlert("Please sign up first to use this feature!");
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  GetCurrentUser();
  GetChannelData();
  GetAllContentData();
  GetSubscribedData();
  GetHistory();
  GetRecommendedContent()

  const { userData } = useSelector((state) => state.user);
  function ChannelPageWrapper(){
  const location = useLocation();
  return <ChannelPage key={location.pathname} />;
  }
  return (
    <>
      <CustomAlert />
      <Routes>

        <Route path="/" element={<Home />}>
          <Route
            path="/shorts"
            element={
              <ProtectRoute userData={userData}>
                <Shorts />
              </ProtectRoute>
            }
          />
 
          <Route
            path="/playshort/:shortId"
            element={
              <ProtectRoute userData={userData}>
                <PlayShort />
              </ProtectRoute>
            }
          />

          <Route
            path="/mobilepro"
            element={
              <ProtectRoute userData={userData}>
                <MobileProfile />
              </ProtectRoute>
            }
          />

          <Route
            path="/viewchannel"
            element={
              <ProtectRoute userData={userData}>
                <ViewChannel />
              </ProtectRoute>
            }
          />

          <Route
            path="/updatechannel"
            element={
              <ProtectRoute userData={userData}>
                <UpdateChannel />
              </ProtectRoute>
            }
          />
       

      
        <Route
          path="/create"
          element={
            <ProtectRoute userData={userData}>
              <CreatePage />
            </ProtectRoute>
          }
        />

        <Route
          path="/createvideo"
          element={
            <ProtectRoute userData={userData}>
              <CreateVideo />
            </ProtectRoute>
          }
        />

        <Route
          path="/createshort"
          element={
            <ProtectRoute userData={userData}>
              <CreateShort />
            </ProtectRoute>
          }
        />

        <Route
          path="/createplaylist"
          element={
            <ProtectRoute userData={userData}>
              <CreatePlayList />
            </ProtectRoute>
          }
        />

        <Route
          path="/createpost"
          element={
            <ProtectRoute userData={userData}>
              <CreatePost />
            </ProtectRoute>
          }
        />
        <Route
  path="/channelpage/:channelId"
  element={<ChannelPage />}
/>




         <Route
          path="/likedcontent"
          element={
            <ProtectRoute userData={userData}>
              <LikedContent/>
            </ProtectRoute>
          }
        />

        <Route
          path="/savedcontent"
          element={
            <ProtectRoute userData={userData}>
              <SavedContent/>
            </ProtectRoute>
          }
        />

        <Route
          path="/savedplaylist"
          element={
            <ProtectRoute userData={userData}>
              <SavedPlaylist/>
            </ProtectRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <ProtectRoute userData={userData}>
              <Subscription />
            </ProtectRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectRoute userData={userData}>
              <HistoryContent/>
            </ProtectRoute>
          }
        />


         
 </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />

        <Route
          path="/createchannel"
          element={
            <ProtectRoute userData={userData}>
              <CreateChannel />
            </ProtectRoute>
          }
        />
createvideo
         <Route
          path="/playvideo/:videoId" 
          element={
            <ProtectRoute userData={userData}>
              <PlayVideo />
            </ProtectRoute>
          }
        />

          <Route
          path="/ptstudio" 
          element={
            <ProtectRoute userData={userData}>
              <PTStudio />
            </ProtectRoute>}>

            <Route
          path="/ptstudio/dashboard"
          element={
            <ProtectRoute userData={userData}>
              <Dashboard/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/analytics"
          element={
            <ProtectRoute userData={userData}>
              <Analytics/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/content"
          element={
            <ProtectRoute userData={userData}>
              <Content/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/revenue"
          element={
            <ProtectRoute userData={userData}>
              <Revenue/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/updatevideo/:videoId"
          element={
            <ProtectRoute userData={userData}>
              <UpdateVideo/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/updateshort/:shortId"
          element={
            <ProtectRoute userData={userData}>
              <UpdateShort/>
            </ProtectRoute>
          }
        />

        <Route
          path="/ptstudio/updateplaylist/:playlistId"
          element={
            <ProtectRoute userData={userData}>
              <UpdatePlaylist />
            </ProtectRoute>
          }
        />

        


      </Route>

      </Routes>
    </>
  );
}  
                
export default App;
