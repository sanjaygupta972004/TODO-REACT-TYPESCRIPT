
 import AddTodo from "./components/todo/AddTodo";
 import { FaBookOpen } from "react-icons/fa";
 import { CiBookmark } from "react-icons/ci";
 import TodoLayout from "./components/todo/TodoLayout";
 import TodoList from "./components/todo/TodoList";
 import Complete from "./components/todo/Complete";
 import Active from "./components/todo/Active";


 import { Routes,Route } from "react-router-dom";


function App() {
 
  return (
    <> 
    <div className="container mt-20 p-4 " >
      <div className=" flex flex-col justify-center ">
        <div className=" flex justify-center my-4 gap-1">
          <FaBookOpen  className="text-2xl font-bold text-center mt-1"/>
          <h1 className="text-2xl font-bold text-center text-gray-600">TODO-REACT-TYPESCRIPT</h1>
          <CiBookmark className="text-2xl font-bold text-center mt-1"/>
       </div>
      <AddTodo />
      <Routes>
        <Route path = "/" element = {<TodoLayout />}>
         <Route path = "all" element = {<TodoList/>} />
          <Route path = "complete" element = {<Complete/>} />
          <Route path = "active" element = {<Active/>} />
  
         </Route>
      </Routes>
       
      </div>
    </div>
    </>
  )
}

export default App
