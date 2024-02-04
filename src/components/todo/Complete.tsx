import  { useState, useEffect } from "react";
import { useTodoContext,TodoContextProps,Todo } from "../store/TodoContext"
import { Button } from "../ui/button";


const Complete = () => {
  const [complete, setComplete] = useState<Todo[]>([]);
  const[completedHandler, setCompletedHandler] = useState(false);

  const {todos,setTodos} = useTodoContext() as TodoContextProps ;

  const handleComplete = () => {
  if(!completedHandler) {
      const completedTodos = todos.filter((todo) => todo.completed===true);
      setComplete(completedTodos);
      setCompletedHandler(true);
  }
} 

useEffect(() => {
  handleComplete();
},[])

const handlerCompleteDelete = () => {
  const newTodos = todos.filter((todo) => todo.completed === false);
  setTodos(newTodos);
  setComplete([]);
}



  return (  
  <>
    <div className="mt-4">
        <h1 className="text-3xl font-serif font-medium text-center text-gray-600 underline">Completed Tasks</h1>  
    </div>
    <div className="mt-4 font-sans text-xl capitalize underline  text-red-700  ">
      {
        complete.map((todo) => {
          return (
            <div key={todo.id} className = "mt-2 w-full "> {todo.title}
            </div>
          )
        })
      } 
  
    </div>
    <div className="mt-4">
        <Button onClick={handlerCompleteDelete} className="bg-red-600 text-white rounded-md hover:bg-red-800" >Delete All</Button>
      </div>

  </>
  )
}

export default Complete