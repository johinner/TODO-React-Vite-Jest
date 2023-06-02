import { useForm } from "../../hook/useForm"

export const Input = ({ todo, boolean, modeEdit, funcionEditarTodo}) => {

  const { description, datoInput, vaciarForm } = useForm({
    description: todo.description
  })

  const envioInfoForm = (e) => {
    e.preventDefault()
    if (description.length <= 1) return;

    funcionEditarTodo({
      description,
      id: todo.id
    })
    modeEdit()
  }

  return (
    <div className="col px-1 m-1 d-flex align-items-center">

      {
        (boolean)
          ? (
            <form onSubmit={envioInfoForm}>
              <input
                type="text"
                className="form-control form-control-lg border-0 edit-todo-input rounded px-3"
                name="description"
                value={description}
                onChange={datoInput}
              />
            </form>
          )
          : (
            <div className="form-control form-control-lg border-0 edit-todo-input rounded px-3 bg-transparent">
              {todo.description}
            </div>
          )
      }
    </div>
  )
}