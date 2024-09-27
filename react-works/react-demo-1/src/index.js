import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppContent from './app-content';


class App extends Component {
  render() {

    const footerProps = {
      year: 2024,
      company: 'walmart',
      website: 'http://walmart.com'
    }

    return <div>
      <AppHeader companyName="walmart" city="Bengaluru" />
      <AppContent location="White Field" />
      <AppFooter {...footerProps} />

    </div>;
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);