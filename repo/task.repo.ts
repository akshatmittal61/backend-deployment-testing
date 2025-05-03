import { TaskModel } from "../models";
import { Task } from "../types";
import { BaseRepo } from "./base";

class TaskRepo extends BaseRepo<Task> {
	protected model = TaskModel;
}

export const taskRepo = new TaskRepo();
