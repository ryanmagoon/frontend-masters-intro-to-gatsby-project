import { Link } from 'gatsby';
import * as React from 'react';

export default function Index() {
  return (
    <main>
      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About</Link>
    </main>
  );
}
