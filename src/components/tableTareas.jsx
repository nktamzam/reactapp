import React, { Component } from "react";
import axios from "axios";
import TrTarea from "./trTareas";

class TableTareas extends Component {
  render() {
    return (
      <table className="table table-striped">
        <tbody>
          {this.props.tareas.map(tareas => (
            <TrTarea
              tareas={tareas}
              eliminar={() => {
                this.eliminar(tareas._id);
              }}
              modificar={() => {
                this.modificar(tareas._id);
              }}
            />
          ))}
        </tbody>
      </table>
    );
  }

  eliminar(id) {
    axios.delete("https://appaeg.herokuapp.com/api/" + id);
    this.props.recarga(id);
  }
}

export default TableTareas;
