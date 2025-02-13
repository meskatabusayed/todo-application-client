import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todoSlice"
// import { useAppDispatch } from "@/redux/hook"
import { FormEvent, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
//amer shomoy ata te chole jai kno?
// import { Dialog } from "@radix-ui/react-dialog"
const AddTodoModal = () => {
  const [task, setTask] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [priority, setPriority] = useState(" ");
  console.log(priority);
  //for local state management
  // const dispatch = useAppDispatch();

  //* for server state
  /* //[actalFunctionforPost , {data , isLoading, isError , isSuccess}] */
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();
  console.log({ data, isLoading, isError, isSuccess });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 8);
    const taskDetails = {
      // id: randomString, //atar jonno type a kono issue korbe ki?
      title: task,
      description: description,
      isCompleted : false,
      priority ,
    };

    //for local state management
    // dispatch(addTodo(taskDetails));
    //server
    addTodo(taskDetails);
    console.log("Inside taskdeatils =>" , taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add Your task , That you finish</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task title
              </Label>
              <Input
                id="task"
                onBlur={(e) => setTask(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Priority"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
              
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
