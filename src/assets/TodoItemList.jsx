import { useState } from "react"
import { Boutons, Input, SelectIcon } from "./components"

export const TodoItemList = ({ todo, eliminarTodo, marcarTodo, funcionEditarTodo }) => {
  const [input, setInput] = useState(false)

  const modeEdit = () => (input)? setInput(false): setInput(true);
  
  return (
    <div className="row px-3 align-items-center todo-item rounded">

      <SelectIcon marcarTodo={marcarTodo} todo={todo} />

      <Input todo={todo} boolean={input} modeEdit={modeEdit} funcionEditarTodo={funcionEditarTodo}/>

      {
        (todo.expirationDate != null)
          ? (
            <div className="col-auto m-1 p-0 px-3 ">
              <div className="row">
                <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
                  <i className="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
                  <h6 className="text my-2 pr-2">{JSON.stringify(todo.expirationDate)}</h6>
                </div>
              </div>
            </div>
          ): ''
       }

      <Boutons
        eliminarTodo={eliminarTodo}
        id={todo.id}
        modeEdit={modeEdit}
      />

    </div>
  )
}
