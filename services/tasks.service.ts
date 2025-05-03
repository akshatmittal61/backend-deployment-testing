import { taskRepo } from "../repo";
import { Task } from "../types";

export class TaskService {
	public static async getAllTasks(): Promise<Array<Task>> {
		return taskRepo.findAll();
	}
	public static async getTaskById(id: string): Promise<Task | null> {
		return taskRepo.findById(id);
	}
}
