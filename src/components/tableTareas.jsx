import React, { Component } from "react";
import axios from "axios";
import TrTarea from "./trTareas";

class TableTareas extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <button
            key="botonNuevo"
            className="btn btn-success"
            onClick={this.cargarFormNueva}
          >
            Nueva tarea
          </button>
        </div>
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
      </div>
    );
  }

  eliminar(id) {
    axios.delete("https://appaeg.herokuapp.com/api/" + id);
    this.props.recarga(id);
  }

  modificar = id => {
    this.props.modifica(id);
  };

  cargarFormNueva = () => {
    this.props.cargar();
  };
}

export default TableTareas;
