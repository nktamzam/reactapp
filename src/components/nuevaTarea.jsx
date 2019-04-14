import React, { Component } from "react";
import axios from "axios";

class NuevaTarea extends Component {
  state = {
    nombre: "",
    descripcion: "",
    estado: false
  };

  render() {
    return (
      <React.Fragment>
        <h1>Nueva tarea</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputNombre">Nombre</label>
            <input
              key="inputNombre"
              id="inputNombre"
              type="text"
              value={this.state.nombre}
              onChange={this.getNombre}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescripcion">Descripción</label>
            <textarea
              key="inputDescripcion"
              id="inputDescripcion"
              value={this.state.descripcion}
              onChange={this.getDescripcion}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                key="inputEstado"
                id="inputEstado"
                checked={this.state.checked}
                onChange={this.getEstado}
                className="form-check-input"
              />
              <label htmlFor="inputEstado" className="form-check-label">
                True
              </label>
            </div>
          </div>
          <div className="form-group">
            <button
              key="botonNuevo"
              className="btn btn-success"
              onClick={() => {
                this.nuevo(
                  this.state.nombre,
                  this.state.descripcion,
                  this.state.estado
                );
              }}
            >
              Nueva tarea
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
  getNombre = e => {
    this.setState({ nombre: e.target.value });
    console.log(this.state);
  };

  getDescripcion = e => {
    this.setState({ descripcion: e.target.value });
    console.log(this.state);
  };

  getEstado = e => {
    this.setState({
      estado: e.target.checked
    });
    console.log(this.state);
  };

  nuevo = (nombre, descripcion, estado) => {
    axios.post(
      `https://appaeg.herokuapp.com/api/nuevo/${nombre}/${descripcion}/${estado}`
    );
  };
}

export default NuevaTarea;
