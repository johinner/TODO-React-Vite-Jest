
export const Boutons = ({ id, eliminarTodo}) => {
 const modeEdit = (id) => {
  console.log(id)
 }

  return (
    <>
      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          <h5 className="m-0 p-0 px-2">
            <i
              className="fa fa-pencil text-info btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit todo"
              onClick={() => modeEdit(id) }
            ></i>
          </h5>
          <h5 className="m-0 p-0 px-2">
            <i
              className="fa fa-trash-o text-danger btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete todo"
              onClick={() => eliminarTodo(id)}
            ></i>
          </h5>
        </div>
        <div className="row todo-created-info">
          <div className="col-auto d-flex align-items-center pr-2">
            <i
              className="fa fa-info-circle my-2 px-2 text-black-50 btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Created date"
            ></i>
            <label className="date-label my-2 text-black-50">
              28th Jun 2020
            </label>
          </div>
        </div>

      </div>
    </>
  )
}