import { Button } from "../ui/button";
import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
      <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
      <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
      </div>
    </div>
  )
}

export default TodoContainer;
