import { useState} from "react";

export const todoFilter = () => {

  const [selectOpcion, setOpcionSelect] = useState({
    filtrar: "all",
    organizar: "admission-date",
  });

  const manejarSeleccion1 = ({ target }) => {
    setOpcionSelect({
      ...selectOpcion,
      filtrar: target.value,
    });
  };

  const manejarSeleccion2 = ({ target }) => {
    setOpcionSelect({
      ...selectOpcion,
      organizar: target.value,
    });
  };


  return {
    selectOpcion,
    manejarSeleccion1,
    manejarSeleccion2
  };
};

 export const todoActionFilter = (todos, action) => {
  switch (action.filtrar) {
    case "all":
      return todos;

    case "completed":
      return todos.filter((todo) => todo.done === true);

    case "active":
      return todos.filter((todo) => todo.done === false);
  }
  return todos;
};
