import { TaskSchema } from "../schema";
import { Task } from "../types";
import { ModelFactory } from "./base";

export const TaskModel = new ModelFactory<Task>("Task", TaskSchema);
