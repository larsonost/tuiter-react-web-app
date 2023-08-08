import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavigationSidebar() {
      const { currentUser } = useSelector((state) => state.user);
      const { pathname } = useLocation();
      const [ignore, tuiter, active] = pathname.split("/");

      // Snippet given by chatGPT to find the active link
      const activeLink = (linkPath) => {
            return pathname.startsWith(linkPath);
      };

      return (
            <div className="list-group">
                  <Link className={`list-group-item ${activeLink("/tuiter/home") ? "active" : ""}`}
                        to="/tuiter/home"> Home </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/explore") ? "active" : ""}`}
                        to="/tuiter/explore"> Explore </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/notifications") ? "active" : ""}`}
                        to="/tuiter/notifications"> Notifications </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/messages") ? "active" : ""}`}
                        to="/tuiter/messages"> Messages </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/Bookmarks") ? "active" : ""}`}
                        to="/tuiter/Bookmarks"> Bookmarks </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/lists") ? "active" : ""}`}
                        to="/tuiter/lists"> Lists </Link>
                  <Link className={`list-group-item ${activeLink("/tuiter/more") ? "active" : ""}`}
                        to="/tuiter/more"> More </Link>
                  {!currentUser && <Link className={`list-group-item ${activeLink("/tuiter/login") ? "active" : ""}`}
                        to="/tuiter/login"> Login </Link>}
                  {!currentUser && <Link className={`list-group-item ${activeLink("/tuiter/register") ? "active" : ""}`}
                        to="/tuiter/register"> Register </Link>}
                  {currentUser && <Link className={`list-group-item ${activeLink("/tuiter/profile") ? "active" : ""}`}
                        to="/tuiter/profile"> Profile </Link>}
            </div>
      );
};

export default NavigationSidebar;