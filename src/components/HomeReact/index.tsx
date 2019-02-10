import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeReact() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cssModules">cssModules</Link>
        </li>
        <li>
          <Link to="/lazy">lazy</Link>
        </li>
        <li>
          <Link to="/unstated">unstated</Link>
        </li>
      </ul>
    </div>
  );
}
