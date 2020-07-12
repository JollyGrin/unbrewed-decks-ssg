import React, { Component } from 'react';
import Layout from '../components/Layout';
import Flipcard from '../components/Flipcard';
import { getData } from '../lib/gson';
import { makeDeckObject } from '../lib/deckParse';

export default function Index({ gson, preview }) {
  return (
    <Layout>
      <section id='nav'>
        <h1 id='pickfighter'>Pick your Fighter</h1>
      </section>
      <section id='body'>
        <div className='buffer'></div>
        <div id='tray'>
          {gson.map((record, index) => {
            if (record.OG) {
              return (
                <Flipcard
                  key={index * Math.random()}
                  record={record}
                  deck={makeDeckObject(record.JSONcode)}
                />
              );
            }
          })}
        </div>
        <div className='buffer'></div>
      </section>
      <footer>
        <span>
          <a href='#'>dean</a>
        </span>
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.URL;

  const gson = await getData(sheetsURL);

  return {
    props: { gson }, // will be passed to the page component as props
  };
}
