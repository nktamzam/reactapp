import React, { Component } from "react";
import axios from "axios";

class ModificarTarea extends Component {
  state = {
    id: "",
    nombre: "",
    descripcion: "",
    estado: ""
  };

  render() {
    return (
      <React.Fragment>
        <h1>Modificar tarea</h1>
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
                checked={this.state.estado}
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
              key="botonModificar"
              className="btn btn-success"
              onClick={() => {
                this.modificar(
                  this.state.id,
                  this.state.nombre,
                  this.state.descripcion,
                  this.state.estado
                );
              }}
            >
              Modificar tarea
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
  getNombre = e => {
    this.setState({ nombre: e.target.value });
  };

  getDescripcion = e => {
    this.setState({ descripcion: e.target.value });
  };

  getEstado = e => {
    this.setState({
      estado: e.target.checked
    });
  };

  componentDidMount() {
    axios
      .get(`https://appaeg.herokuapp.com/api/5ca5d02026066e6c3fba7dd8`)
      .then(res => {
        this.setState({
          id: res.data.tarea._id,
          nombre: res.data.tarea.nombre,
          descripcion: res.data.tarea.descripción,
          estado: res.data.tarea.estado
        });
      });
  }

  modificar = (id, nombre, descripcion, estado) => {
    axios.put(
      `https://appaeg.herokuapp.com/api/${id}/${nombre}/${descripcion}/${estado}`
    );
  };
}

export default ModificarTarea;
