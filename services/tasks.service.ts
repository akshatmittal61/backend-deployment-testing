import { HTTP } from "../constants";
import { ApiError } from "../errors";
import { taskRepo } from "../repo";
import { CreateModel, Task } from "../types";

export class TaskService {
	public static async getAllTasks(): Promise<Array<Task>> {
		return taskRepo.findAll();
	}
	public static async getTaskById(id: string): Promise<Task | null> {
		return taskRepo.findById(id);
	}
	public static async createTask(body: CreateModel<Task>): Promise<Task> {
		if (body.title === "") {
			throw new ApiError(HTTP.status.BAD_REQUEST, "Title is required");
		}
		const foundTask = await taskRepo.findOne({ title: body.title });
		if (foundTask) {
			throw new ApiError(HTTP.status.CONFLICT, "Task already exists");
		}
		const createdTask = await taskRepo.create(body);
		return createdTask;
	}
	public static async updateTask({
		id,
		body,
	}: {
		id: string;
		body: Partial<Task>;
	}): Promise<Task | null> {
		const foundTask = await taskRepo.findById(id);
		if (!foundTask) {
			throw new ApiError(HTTP.status.NOT_FOUND, "Task not found");
		}
		if (
			body.title === foundTask.title &&
			body.completed === foundTask.completed
		) {
			throw new ApiError(HTTP.status.BAD_REQUEST, "No changes made");
		}
		if (body.title === "") {
			throw new ApiError(HTTP.status.BAD_REQUEST, "Title is required");
		}
		const updatedTask = await taskRepo.update({ id }, body);
		if (!updatedTask) {
			throw new ApiError(
				HTTP.status.INTERNAL_SERVER_ERROR,
				"Failed to update task"
			);
		}
		return updatedTask;
	}
	public static async deleteTask(id: string): Promise<Task | null> {
		return taskRepo.remove({ id });
	}
}
