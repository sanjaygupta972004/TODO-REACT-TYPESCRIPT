
import {createContext,useContext,useState} from 'react';

export type Todo = {
      id: string;
      title: string;
      completed: boolean;
      createdAt : Date;
}


export type TodoContextProps = {
      todos: Todo[];
      setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
      handleTodo: (id: string) => void;
      handlerToggleTode: (id: string) => void;
      handleDelete: (id: string) => void;
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

      const handlerToggleTode = (id: string) => {
            const newTodos = todos.map((todo) => {
                  if(todo.id === id) {
                        return {
                              ...todo,
                              completed: !todo.completed
                        }
                  }
                  return todo;
            });

            setTodos(newTodos);
        
      }

      const handleDelete = (id: string) => {
            todos.map((todo) => {
                if(todo.id === id) {
                   const newTodos = todos.filter((todo) => todo.id !== id);
                        setTodos(newTodos);
                      return newTodos;
                }
                return todo;
            })

          }  
  
       

      return (
         <TodoContext.Provider value={{todos,handleTodo,handlerToggleTode, handleDelete,setTodos}}>
               {children}
         </TodoContext.Provider>
      )
}


export const useTodoContext = () => useContext(TodoContext);   