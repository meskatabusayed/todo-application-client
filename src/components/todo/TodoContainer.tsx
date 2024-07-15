
import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/hook";


const TodoContainer = () => {
  const {todos} = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-6">
        
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
      <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
      {
        todos.map((item) => (
          <TodoCard {...item}/>
        ))
      }
        
      </div>
      </div>
    </div>
  )
}

export default TodoContainer;
