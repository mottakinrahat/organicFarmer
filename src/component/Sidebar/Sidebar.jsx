import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <Link to="/item1">Sidebar Item 1</Link>
      </li>
      <li>
        <Link to="/item2">Sidebar Item 2</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
