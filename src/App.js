import React, { Component } from "react";
import Menu from "./components/menu";
import TableTareas from "./components/tableTareas";
import NuevaTarea from "./components/nuevaTarea";
import ModificarTarea from "./components/modificarTarea";
import axios from "axios";

class App extends Component {
  state = {
    tareas: []
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <main role="main" className="container">
          <div>
            <ModificarTarea tareas={this.state.tareas} />
          </div>
          <div>
            <NuevaTarea />
          </div>
          <div>
            <TableTareas tareas={this.state.tareas} recarga={this.recarga} />
          </div>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    axios.get("https://appaeg.herokuapp.com/api/").then(res => {
      const arr_tareas = res.data.tareas;
      this.setState({ tareas: arr_tareas });
    });
  };

  recarga = id => {
    this.setState({
      tareas: this.state.tareas.filter(x => x._id !== id)
    });
  };
}

export default App;
