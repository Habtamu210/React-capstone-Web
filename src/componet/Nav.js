import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav bg-danger ">
    <ul className="d-flex justify-content-between w-100 my-2 mx-0">
      <li className="fonts d-flex gap- list-unstyled">
        <NavLink
          className="text-decoration-none"
          to="/"
        >
          <h3 className="fonts"> ⇐</h3>
        </NavLink>
        <h5 className="pl-3 mt-1 fonts pad font-weight-light">  Crypto Coins Exchange Value</h5>
      </li>
      <li className="d-flex list-unstyled px-0">
        <h1 className="px-5 font-weight-light">&#937;</h1>
      </li>
    </ul>
  </nav>
);

export default Nav;
