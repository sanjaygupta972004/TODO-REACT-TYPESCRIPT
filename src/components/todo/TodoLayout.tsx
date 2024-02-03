import { NavLink, Outlet } from "react-router-dom";

const TodoLayout = () => {
  return (
    <>
    <nav className="flex mt-3  ">
      <ul className=" flex gap-10 lg:gap-60 sm:gap-40">
        <li>
          <NavLink to="/all" className = " hover:bg-white text-black rounded-md"    >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/complete" className = "hover:bg-blue-600 hover:text-white rounded-sm"  > 
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/delete" className = "hover:bg-red-800 rounded-sm hover:text-white" >
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
