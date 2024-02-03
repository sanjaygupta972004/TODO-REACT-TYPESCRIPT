import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { ChangeEvent,FormEvent} from "react"
import { useState } from "react"
import { useTodoContext,TodoContextProps } from "../store/TodoContext"

const AddTodo = () => {
   const[todo, setTodo] = useState("") 
   const {handleTodo} = useTodoContext() as TodoContextProps;

   const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleTodo (todo);
      setTodo ("");
   }
  
  
   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTodo (event.target.value)
   }


  return (
      <>
      
         <form onSubmit={handleAddTodo} className="flex gap-2 ">
         <Input placeholder = "Add a new todo" value={todo} type="text" onChange={handleInputChange} />
         <Button variant= "default" type = "submit" >Add</Button>
         </form>
   
      </>
  )
}

export default AddTodo