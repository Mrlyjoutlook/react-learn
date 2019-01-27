import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cssModules">cssModules</Link>
        </li>
        <li>
          <Link to="/lazy">lazy</Link>
        </li>
      </ul>
    </div>
  );
}
