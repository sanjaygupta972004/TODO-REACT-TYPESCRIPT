
 import AddTodo from "./components/todo/AddTodo"
 import { FaBookOpen } from "react-icons/fa";
 import { CiBookmark } from "react-icons/ci";


function App() {
 

  return (
    <> 
    <div className="container mt-20 p-4 " >
      <div className=" flex flex-col justify-center ">
        <div className=" flex justify-center my-4 gap-1">
          <FaBookOpen  className="text-3xl font-bold text-center mt-1"/>
          <h1 className="text-3xl font-bold text-center text-gray-600">REACT-TYPESCRIPT</h1>
          <CiBookmark className="text-3xl font-bold text-center mt-1"/>
       </div>
      <AddTodo />

      </div>
    </div>
   
    </>
  )
}

export default App
