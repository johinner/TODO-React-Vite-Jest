
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const TodoFiltros = () => {

 const {manejarSelecFilter} = useContext(UserContext)
const {selectOpcion, manejarSeleccion1, manejarSeleccion2} = manejarSelecFilter

  return (
    <div className="row m-1 p-3 px-5 justify-content-end">
      <div className="col-auto d-flex align-items-center">
        <label className="text-secondary my-2 pr-2 view-opt-label">Filtrar</label>
        <select value={selectOpcion.filtrar} onChange={manejarSeleccion1} className="custom-select custom-select-sm btn my-2">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="active">Activas</option>
          <option value="has-due-date">Tiene vencimiento</option>
        </select>
      </div>
      <div className="col-auto d-flex align-items-center px-1 pr-3">
        <label className="text-secondary my-2 pr-2 view-opt-label">Organizar</label>
        <select value={selectOpcion.organizar} onChange={manejarSeleccion2} className="custom-select custom-select-sm btn my-2">
          <option value="admission-date">Fecha añadida</option>
          <option value="expiration-date">Fecha vencimiento</option>
        </select>
        <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
        <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
      </div>
    </div>
  )
}