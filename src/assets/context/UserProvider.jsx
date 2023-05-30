
import { todoFilter } from "../../hook/todoFilter"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
    const manejarSelecFilter = todoFilter()

    return (
        <UserContext.Provider value={{ manejarSelecFilter}}>
            { children }
        </UserContext.Provider>
    )
}
