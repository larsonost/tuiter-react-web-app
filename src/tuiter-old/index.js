import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import ExploreScreen from "./explore-screen/index.js";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
    { reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer } });

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                        <NavigationSidebar />
                    </div>
                    <div className="col-lg-7 col-md-9 col-sm-9 col-9">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                        </Routes>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <div class="d-none d-lg-block">
                            <WhoToFollowList />
                        </div>


                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;
