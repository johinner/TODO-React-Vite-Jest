
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodos } from '../hook/useTodos'
import { TodoFiltros } from './TodoFiltros';
import { UserProvider } from './context/UserProvider';



export const App = () => {

  const {todos, manejarNuevoTodo, EliminarTodo, marcarTodo } = useTodos();

  return (
    <UserProvider>
      
    <div className='container m-5 p-2 rounded mx-auto bg-light shadow'>

      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h3 text-primary mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-1"></i>
            <u> Registro</u>
          </div>
        </div>
      </div>

      <TodoAdd FuncionAgregarTodo={manejarNuevoTodo} />

      <TodoFiltros/>

      <div className='row mx-1 px-5 pb-3 w-80'>
        <TodoList
          todos={todos}
          funcionEliminarTodo={EliminarTodo}
          funcionMarcarTodo={marcarTodo}
          />
      </div>
    </div>
    </UserProvider>
  )
}