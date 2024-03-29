import { Button } from '../ui/button';
import { useTodoContext,TodoContextProps } from "../store/TodoContext"

  const TodoList = () => {

  const {todos,handlerToggleTode,handleDelete} = useTodoContext() as TodoContextProps;

  return (
    <>
      {
        todos.length === 0 ? <h1 className="text-2xl mt-4 font-bold font-mono text-center text-orange-600 underline">No Tasks</h1> :
        todos.map((todo) => {
          return (
            <div key={todo.id} className = "mt-3 flex space-x-20 w-full pr-1">
                <div className=" space-x-4 text-2xl w-[90%] font-serif  ">
                    <label htmlFor= {`todo-${todo.id}`}  className= {todo.completed?"text-red-500 line-through":"text-black"} >{todo.title}</label>
                    <input type="checkbox" id={`todo-${todo.id }`} className="h-5 w-5" checked={todo.completed}
                      onChange={()=>handlerToggleTode(todo.id)} />
                      </div>
                      <div className="bg-pink-200 rounded-[10px]">
                        {
                          todo.completed && <Button className="text-xl hover:bg-red-800 hover:text-white rounded-[10px] font-senserif" type = "submit" onClick= {()=>handleDelete(todo.id)} >Delete</Button>
                        }
                    </div>
          
            </div>
          )
      }) 
        
      }
    </>
  )
}

export default TodoList