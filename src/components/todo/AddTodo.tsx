import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { ChangeEvent } from "react"
import { useState } from "react"

const AddTodo = () => {
   const[todo, setTodo] = useState("") 

   const handleAddTodo = () => {
      console.log("Add todo", todo)
   }

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTodo (event.target.value)
      
   }

  return (
      <>
      <div className="flex gap-2 " >
         <Input placeholder = "Add a new todo" value={todo} type="text" onChange={handleInputChange} />
         <Button variant= "default"  onSubmit={handleAddTodo} >Add</Button>
      </div>
      </>
  )
}

export default AddTodo