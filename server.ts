import express from "express";
import { PORT } from "./config";
import { apiRouter } from "./routes";

const app = express();

app.get("/api/health", (_, res) => {
	res.status(200).json({ message: "Server is healthy" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
