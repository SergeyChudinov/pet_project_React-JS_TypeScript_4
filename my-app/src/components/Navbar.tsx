import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <NavLink to="/" className="brand-logo">
        React + Typescript
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({ color: isActive ? "white" : "black" })}
          >
            Список дел
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "white" : "black" })}
          >
            Информация
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);