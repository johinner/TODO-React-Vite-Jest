import { Boutons, Input, SelectIcon } from "./components"

export const TodoItemList = ({ todo, eliminarTodo, marcarTodo }) => {
  return (
    <div className="row px-3 align-items-center todo-item rounded">

      <SelectIcon marcarTodo={marcarTodo} todo={todo} />

      <Input todo={todo} />

      <div className="col-auto m-1 p-0 px-3 ">{/* tiene d-none */}
        <div className="row">
          <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
            <i className="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
            <h6 className="text my-2 pr-2">28th Jun 2020</h6>
          </div>
        </div>
      </div>

      <Boutons
        eliminarTodo={eliminarTodo}
        id={todo.id}
      />

    </div>
  )
}
