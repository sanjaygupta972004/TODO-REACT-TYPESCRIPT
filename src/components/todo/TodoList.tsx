
import { useTodoContext,TodoContextProps } from "../store/TodoContext"
   
const TodoList = () => {

   const {todos,handlerToggleTode,handleDelete} = useTodoContext() as TodoContextProps;
   console.log(todos);

   
   
  return (
    <>
      {
         todos.map((todo) => {
            return (
               <div key={todo.id} className = "mt-3 flex space-x-20 w-full pr-1">
                  <div className=" space-x-4 text-2xl w-[90%] font-serif  ">
                      <label htmlFor= {`todo-${todo.id}`}  className= {todo.completed?"text-red-500":"text-black"} >{todo.title}</label>
                      <input type="checkbox" id={`todo-${todo.id }`} className="h-5 w-5" checked={todo.completed}
                         onChange={()=>handlerToggleTode(todo.id)} />
                   </div>
                     <div className="w-[10%] lg:w-[5%] text-xl hover:bg-red-800 rounded-sm hover:text-white">
                         {
                           todo.completed && <button type = "submit" onClick= {()=>handleDelete(todo.id)} >Delete</button>
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