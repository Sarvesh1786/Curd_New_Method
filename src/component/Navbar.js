import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  const [state, setState] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const { activeItem } = state;

  return (
    <Menu inverted>
      <Link to="/">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/showList">
        <Menu.Item
          name="showList"
          active={activeItem === "showList"}
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/addform">
        <Menu.Item
          name="Add"
          active={activeItem === "Add"}
          onClick={handleItemClick}
        />
      </Link>
      
        <Menu.Item
          name="Update"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
      
    </Menu>
  );
};
export default Navbar;
