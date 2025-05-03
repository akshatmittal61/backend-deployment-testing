import { HTTP } from "../constants";
import { TaskService } from "../services";
import { ApiRequest, ApiResponse } from "../types";

export class TasksController {
	public static async getAllTasks(_: ApiRequest, res: ApiResponse) {
		const tasks = TaskService.getAllTasks();
		res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.SUCCESS, data: tasks });
	}
}
