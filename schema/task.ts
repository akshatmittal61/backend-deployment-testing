export const TaskSchema = {
	title: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
};
