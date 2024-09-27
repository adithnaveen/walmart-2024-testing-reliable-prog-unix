import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import AppHeader from './app-header';


class App extends Component {
  render() {
    return <div>
      <AppHeader />
      <p>Hello React</p>
    </div>;
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);