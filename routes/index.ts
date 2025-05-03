import { TasksController } from "../controllers/tasks.controller";
import { router, wrapper } from "./base";

router.get("/tasks", TasksController.getAllTasks);

export const apiRouter = wrapper(router);
