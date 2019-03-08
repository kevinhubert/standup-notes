import React from 'react';
import ItemsSection from './ItemsSection';
import Header from './Header';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ItemsSection />
          <div className="circle-button" />
        </main>
      </div>
    );
  }
}

export default App;
