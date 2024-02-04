import { useTodoContext,TodoContextProps,Todo } from "../store/TodoContext"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
const Active = () => {
  const[activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const[activeHandler, setActiveHandler] = useState<boolean>(false);
  const {todos,setTodos} = useTodoContext() as TodoContextProps;

  const handleActive = () => {
    if(!activeHandler) {
      const active = todos.filter((todo) => todo.completed===false);
      setActiveTodos(active);
      setActiveHandler(true);
    }
  }

  useEffect(() => {
    handleActive();
  },[]);


  const editHandler = (id:string) => {
    const newTodos = activeTodos.map((todo)=>{
      if(todo.id === id) {
        return {
          ...todo,
          title: prompt("Edit Todo",todo.title) || todo.title
        }
      }
      return todo;
    } )
    setActiveTodos(newTodos);
    setTodos(newTodos);
  }

  return (
    <>
    <div className="mt-4">
        <h1 className="text-3xl font-serif font-medium text-center text-gray-600 underline">Active Tasks</h1>  
    </div>
    <div className="mt-4  capitaliz border p-5 ">
      {
        activeTodos.map((todo) => {
          return (
            <div key={todo.id} className = "mt-2 w-full flex justify-between">
              <label className=" font-sans text-2xl capitalize underline text-sky-700  " >{todo.title}</label>
              <Button  className="bg-red-600 text-white rounded-md hover:bg-red-800" onClick={()=>editHandler(todo.id)} >Edit Todo</Button>
            </div>
            
          )
        })
      } 
  
    </div>
    </>
  )
}

export default Active