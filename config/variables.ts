import { T_NODE_ENV, T_URL } from "../types";
import { configService } from "./base";

export const PORT = configService.safeGet(
	() => configService.getNumber("PORT"),
	4000
);

export const url: Record<T_URL, string> = {
	db: configService.safeGet(
		() => configService.get("DB_URI"),
		"mongodb://localhost:27017/todos"
	),
	frontend: configService.safeGet(
		() => configService.get("FRONTEND_BASE_URL"),
		"http://localhost:3000"
	),
	backend: configService.safeGet(
		() => configService.get("BACKEND_BASE_URL"),
		"http://localhost:4000/api/v1"
	),
};

export const nodeEnv = configService.safeGet(
	() => configService.get("NODE_ENV") as T_NODE_ENV,
	"development"
);

export const enableDebugging = configService.safeGet(
	() => configService.getBoolean("ENABLE_DEBUGGING"),
	false
);
