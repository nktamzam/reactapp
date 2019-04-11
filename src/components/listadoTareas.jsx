import React, { Component } from "react";
import axios from "axios";

class ListadoTareas extends Component {
  state = {
    tareas: []
  };

  render() {
    return (
      <ul>
        {this.state.tareas.map(tareas => (
          <li key={tareas._id}>{tareas.nombre}</li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    axios.get("https://appaeg.herokuapp.com/api/").then(res => {
      const tareas = res.data.tareas;
      this.setState({ tareas });
    });
  }
}

export default ListadoTareas;
