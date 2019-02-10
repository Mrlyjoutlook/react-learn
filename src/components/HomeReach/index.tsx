import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

export default function HomeReact(props: RouteComponentProps) {
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
