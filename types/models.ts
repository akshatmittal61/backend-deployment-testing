import { Model } from "./parser";

export type Task = Model<{
	title: string;
	completed: boolean;
}>;
