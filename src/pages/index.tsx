import * as React from 'react';

import Layout from '../components/layout';
import '../styles/main.sass';
import DateForm from '../components/date-form/date-form';
import Header from '../components/header/header';

const IndexPage = () => {
  console.log('v.2.0.1');
  return (
    <Layout>
      <Header />
      <div className='main'>
        <DateForm />
      </div>
    </Layout>
  );
};

export default IndexPage;
