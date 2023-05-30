
export const SelectIcon = ({todo, marcarTodo}) => {

    return (
        <div className="col-auto m-1 p-0 d-flex align-items-center">
            <h2 className="m-0 p-0">
                <i
                    className={`fa text-primary btn m-0 p-0 ${(todo.done)?"fa-check-square-o": "fa-square-o"} `}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Mark as complete"
                    onClick={()=> marcarTodo(todo.id)}
                ></i>
            </h2>
        </div>
    )
}
