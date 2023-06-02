
import { useState } from "react";
import { useForm } from "../hook/useForm"
import { Fecha } from "./Fecha"

export const TodoAdd = ({FuncionAgregarTodo}) => {

    const valueForm = {
        description: ""
    }

    const { description, datoInput, vaciarForm } = useForm(valueForm)
    const [expirationDate, setExpirationDate] = useState(null)

    const envioInfoForm = (e) => {
        e.preventDefault()
        if (description.length <= 1) return;

        const nuevoTodo = {
            id: new Date().getTime(),
            description,
            done: false,
            creationDate: new Date(),
            expirationDate
            
        }
        FuncionAgregarTodo(nuevoTodo)
        vaciarForm()
    }


    return (
        <>
        <form onSubmit={envioInfoForm} className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <input
                  className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                  type="text"
                  placeholder="Añadir nuevo"
                  name="description"
                  value={description}
                  onChange={datoInput}
                />
              </div>
              <div className="col-auto m-0 w-25 px-2 d-flex align-items-center">
                <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                  Fecha de vencimiento no establecida
                </label>

                <i
                  className="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Establecer una fecha de vencimiento"
                ></i>
                <Fecha className={"fa text-primary custom-select custom-select-sm"} obtenerDate={setExpirationDate}/>
                <i
                  className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Borrar fecha de vencimiento"
                ></i>
              </div>
              <div className="col-auto px-0 mx-0 mr-2">
                <button type="submit" className="btn btn-primary">
                  Añadir
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      </>
    )
}