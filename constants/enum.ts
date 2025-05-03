import { T_NODE_ENV } from "../types";
import { getEnumeration } from "../utils";

export const NODE_ENV = getEnumeration<T_NODE_ENV>([
	"development",
	"test",
	"production",
]);
