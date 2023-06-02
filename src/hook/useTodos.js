import { useEffect, useReducer } from "react";
import { todoAcciones } from "./todoAcciones";

const todoInicial = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, procesoTodo] = useReducer(todoAcciones, {}, todoInicial);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const manejarNuevoTodo = (dataTodo) => {
    procesoTodo({
      type: "[TODO] App Todo",
      payload: dataTodo,
    });
  };

  const EliminarTodo = (idTodo) => {
    procesoTodo({
      type: "[TODO] Remove Todo",
      payload: idTodo,
    });
  };

  const marcarTodo = (idTodo) => {
    procesoTodo({
      type: "[TODO] Toggle Todo",
      payload: idTodo,
    });
  };

  const editarTodo = ({ description, id }) => {
    procesoTodo({
      type: "[TODO] Edit Todo",
      payload: {
        description,
        id,
      },
    }); 
  };

  return {
    todos,
    manejarNuevoTodo,
    EliminarTodo,
    marcarTodo,
    editarTodo,
  };
};
