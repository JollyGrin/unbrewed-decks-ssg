import React, { Component } from 'react';
import Layout from '../components/Layout';
import Flipcard from '../components/Flipcard';
import { getData } from '../lib/gson';
import { makeDeckObject } from '../lib/deckParse';
import { ToastContainer, toast } from 'react-toastify';
import CopyToClipboard from 'copy-text-to-clipboard';

export default function Official({ gson, preview }) {
  const copy = (string) => {
    toast(`
        Copied ${string.hero.name} to your clipboard! Paste into the deck simulator
    `);
    CopyToClipboard(JSON.stringify(string));
  };
  return (
    <Layout>
      <ToastContainer />
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
                  copy={copy}
                />
              );
            }
          })}
        </div>
        <div className='buffer'></div>
      </section>
      <footer>
        <span>
          <a href='#'></a>
        </span>
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.OFFICIAL;

  const gson = await getData(sheetsURL);

  return {
    props: { gson }, // will be passed to the page component as props
  };
}
