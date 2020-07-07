import React, { Component } from 'react';
import Layout from '../components/Layout';
import Flipcard from '../components/Flipcard';

export default function Index({ gson, preview }) {
  return (
    <Layout>
      <section id='nav'>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
      </section>
      <section id='body'>
        <div className='buffer'></div>
        <div id='tray'>
          <Flipcard />
          <Flipcard />
          <Flipcard />
        </div>
        <div className='buffer'></div>
      </section>
      <footer>
        <span>dean</span>
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.URL;

  // const gson = await getData(sheetsURL);
  let gson = {};

  return {
    props: { gson }, // will be passed to the page component as props
  };
}
