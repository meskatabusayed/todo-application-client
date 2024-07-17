
import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter";
// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";


const TodoContainer = () => {
  const [priority , setPriority] = useState('');
  console.log(priority);

  //* from local state
  // const {todos} = useAppSelector((state) => state.todos);
  //*From server state
  const {data : todos , isLoading , isError} = useGetTodosQuery(priority);
  console.log(todos);
  if(isLoading){
    <p>Loading...</p>
  }
  return (
    <div>
      <div className="flex justify-between mb-6">
        
        <AddTodoModal />
        <TodoFilter priority = {priority}  setPriority = {setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
      <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
      {
        todos?.data.map((item) => (
          <TodoCard {...item}/>
        ))
      }
        
      </div>
      </div>
    </div>
  )
}

export default TodoContainer;
