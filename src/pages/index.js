import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
