import {createContext,useContext,useState} from 'react';

type Todo = {
      id: string;
      title: string;
      completed: boolean;
      createdAt : Date;
}


type TodoContextProps = {
      todos: Todo[];
      handleTodo: (id: string) => void;
      // toggleTodo: (id: string) => void;
      // editTodo: (id: string, title: string) => void;
      // clearTodos: () => void;

}

const TodoContext = createContext<TodoContextProps | null>(null);


type ChildrenProps = {
      children: React.ReactNode;

}

export const TodoProvider = ({children}: ChildrenProps) => {

      const[todos, setTodos] = useState<Todo[]>([]);

      const handleTodo = (task:string) => {
            const newTodo : Todo[] =  [
                       {
                         id: Math.random().toString(),
                         title: task,
                         completed: false,
                         createdAt: new Date()
                        }];

                        setTodos((prevTodos) => [...prevTodos, ...newTodo]);

                        return newTodo;

      }

      console.log(todos);

      return (
         <TodoContext.Provider value={{todos,handleTodo}}>
               {children}
         </TodoContext.Provider>
      )
}


export const useTodoContext = () => useContext(TodoContext);   