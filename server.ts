import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/api/health", (_, res) => {
	res.status(200).json({ message: "Server is healthy" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
