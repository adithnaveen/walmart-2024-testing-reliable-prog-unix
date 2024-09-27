import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppContent from './app-contnet';


class App extends Component {
  render() {
    return <div>
      <AppHeader companyName="walmart" city="Bengaluru" />
      <AppContent location="White Field" />
      <AppFooter year="2024" />

    </div>;
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);