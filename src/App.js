import React, { Component } from "react";
import Menu from "./components/menu";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <main role="main" class="container">
          <div>
            <Counters />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
