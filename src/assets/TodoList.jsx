
import { useContext } from "react"
import { TodoItemList } from "./TodoItemList"
import { UserContext } from "./context/UserContext"
import { todoActionFilter } from "../hook/todoFilter"

export const TodoList = ({todos, funcionEliminarTodo, funcionMarcarTodo, funcionEditarTodo}) => {

    const {manejarSelecFilter}= useContext(UserContext)
    const {selectOpcion} = manejarSelecFilter;
    const todosFiltrados = todoActionFilter(todos, selectOpcion)

    return (
        <div className="col mx-auto">
            {
                todosFiltrados.map(todo => (
                    <TodoItemList
                        key={todo.id}
                        todo={todo}
                        eliminarTodo={funcionEliminarTodo}
                        marcarTodo={funcionMarcarTodo}
                        funcionEditarTodo={funcionEditarTodo} />
                ))
            }
        </div>
    )
}