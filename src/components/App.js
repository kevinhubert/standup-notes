import React from "react";
import ItemsSection from "./ItemsSection";
import Header from "./Header";
import ActionButton from "./ActionButton";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ItemsSection />
        </main>
        <ActionButton />
      </div>
    );
  }
}

export default App;
