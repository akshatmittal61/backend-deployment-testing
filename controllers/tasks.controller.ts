import { HTTP } from "../constants";
import { TaskService } from "../services";
import { ApiRequest, ApiResponse, Task } from "../types";
import {
	ApiFailure,
	ApiSuccess,
	genericParse,
	getBoolean,
	getNonEmptyString,
	safeParse,
} from "../utils";

export class TasksController {
	public static async getAllTasks(_: ApiRequest, res: ApiResponse) {
		const tasks = await TaskService.getAllTasks();
		return new ApiSuccess<Array<Task>>(res).send(tasks);
	}
	public static async getTaskById(req: ApiRequest, res: ApiResponse) {
		const task = await TaskService.getTaskById(req.params.id);
		if (!task) {
			return new ApiFailure(res).status(HTTP.status.NOT_FOUND).send();
		}
		return new ApiSuccess<Task>(res).send(task);
	}
	public static async createTask(req: ApiRequest, res: ApiResponse) {
		const title = genericParse(getNonEmptyString, req.body.title);
		const completed = genericParse(getBoolean, req.body.completed);
		const task = await TaskService.createTask({ title, completed });
		return new ApiSuccess<Task>(res).status(HTTP.status.CREATED).send(task);
	}
	public static async updateTask(req: ApiRequest, res: ApiResponse) {
		const taskId = genericParse(getNonEmptyString, req.params.id);
		const title = safeParse(getNonEmptyString, req.body.title);
		const completed = safeParse(getBoolean, req.body.completed);
		const body: Partial<Task> = {};
		if (title != null) body["title"] = title;
		if (completed != null) body["completed"] = completed;
		const task = await TaskService.updateTask({ id: taskId, body });
		if (!task) {
			return new ApiFailure(res).status(HTTP.status.NOT_FOUND).send();
		}
		return new ApiSuccess<Task>(res).send(task);
	}
	public static async deleteTask(req: ApiRequest, res: ApiResponse) {
		const taskId = genericParse(getNonEmptyString, req.params.id);
		const task = await TaskService.deleteTask(taskId);
		if (!task) {
			return new ApiFailure(res).status(HTTP.status.NOT_FOUND).send();
		}
		return new ApiSuccess<Task>(res).send(task);
	}
}
