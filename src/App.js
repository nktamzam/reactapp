import React, { Component } from "react";
import Menu from "./components/menu";
import TableTareas from "./components/tableTareas";
import NuevaTarea from "./components/nuevaTarea";
import ModificarTarea from "./components/modificarTarea";
import axios from "axios";

class App extends Component {
  state = {
    tareas: [],
    idMod: "",
    formNueva: false,
    listado: true
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <main role="main" className="container">
          {this.state.idMod !== "" ? (
            <ModificarTarea tareas={this.state.tareas} id={this.state.idMod} />
          ) : (
            ""
          )}
          {this.printFormNuevo()}
          {this.printTableTareas()}
        </main>
      </React.Fragment>
    );
  }

  printTableTareas() {
    if (this.state.idMod === "" && this.state.listado === true) {
      return (
        <TableTareas
          tareas={this.state.tareas}
          recarga={this.recarga}
          modifica={this.modifica}
          cargar={this.mostrarForm}
        />
      );
    } else {
      return "";
    }
  }

  mostrarForm = () => {
    this.setState({
      formNueva: true,
      listado: false
    });
  };

  printFormNuevo = () => {
    if (this.state.formNueva === true) {
      return <NuevaTarea />;
    }
  };

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

  modifica = id => {
    this.setState({
      idMod: id
    });
  };
}

export default App;
