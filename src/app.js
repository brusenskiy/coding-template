import React from 'react';
import Head from './components/head/Head.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

import './app.scss';

export default class extends React.Component {
  render() {
    const navItems = [
      { href: '/about/', title: 'About' },
      { href: '/support/', title: 'Support' },
      { href: '/contacts/', title: 'Contacts' },
    ];

    return (
      <div>
        <Head />
        <nav><ul>{ navItems.map((item, index) => {
          return <li key={ index }>
            <a href={ item.href }>{ item.title }</a>
          </li>;
        })}</ul></nav>
        <Content />
        <Footer />
      </div>
    );
  }
}
