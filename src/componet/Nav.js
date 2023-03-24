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
