import { NavLink, Outlet } from "react-router-dom";

const TodoLayout = () => {
  return (
    <>
    <nav className="flex mt-4  ">
      <ul className=" flex gap-10 lg:gap-60 sm:gap-40 text-xl font-mono">
        <li>
          <NavLink to="/all" className = " hover:bg-black hover:text-white rounded-md"    >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" className = "hover:bg-blue-600 hover:text-white rounded-sm"  > 
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/complete" className = "hover:bg-sky-800 rounded-sm hover:text-white" >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>

    <div>
      <Outlet />
    </div>

    </>
    
  );
};

export default TodoLayout;
