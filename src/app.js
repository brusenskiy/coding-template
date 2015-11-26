import './app.styl';

import React from 'react';
import Head from './components/head/Head.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Content />
        <Footer />
      </div>
    );
  }
}
