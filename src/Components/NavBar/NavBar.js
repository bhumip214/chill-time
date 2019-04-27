import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink>
          <img src="https://img.icons8.com/ios/30/000000/home-page.png" />
        </NavLink>
        <NavLink>
          <img src="https://img.icons8.com/ios/30/000000/settings.png" />
        </NavLink>
        <NavLink>
          <img src="https://img.icons8.com/ios/24/000000/christmas-star.png" />
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
