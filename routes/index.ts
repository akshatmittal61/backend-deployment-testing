import { TasksController } from "../controllers/tasks.controller";
import { router, wrapper } from "./base";

router
	.route("/tasks")
	.get(TasksController.getAllTasks)
	.post(TasksController.createTask);
router
	.route("/tasks/:id")
	.get(TasksController.getTaskById)
	.patch(TasksController.updateTask)
	.delete(TasksController.deleteTask);

export const apiRouter = wrapper(router);
