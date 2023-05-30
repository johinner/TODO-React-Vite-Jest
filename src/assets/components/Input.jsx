
export const Input = ({ todo }) => {

  return (
    <div className="col px-1 m-1 d-flex align-items-center">
      
        {/* 
            <input
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
              name="nota"
              value={todo.description}
              title="Buy groceries for next week"
            /> */}
        
            <div className="form-control form-control-lg border-0 edit-todo-input rounded px-3 bg-transparent">
              {todo.description}
            </div>
        
      

    </div>
  )
}