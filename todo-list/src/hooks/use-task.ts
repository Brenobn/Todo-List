import useLocalStorage from "use-local-storage";
import { TASKS_KEY, Task } from "../models/task";

export default function useTask() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}