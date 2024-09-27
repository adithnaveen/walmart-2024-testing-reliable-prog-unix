import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './app-header';
import AppFooter from './app-footer';


class App extends Component {
  render() {
    return <div>
      <AppHeader companyName="walmart" city="Bengaluru" />
      <p>From Index.js file </p>
      <AppFooter year="2024" />
    </div>;
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);