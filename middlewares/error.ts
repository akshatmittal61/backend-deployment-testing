import { NextFunction } from "express";
import { HTTP } from "../constants";
import { ApiError, DbConnectionError, ParserSafetyError } from "../errors";
import { Logger } from "../log";
import { ApiRequest, ApiResponse } from "../types";
import { ApiFailure } from "../utils";

export const errorHandler = (
	error: any,
	_: ApiRequest,
	res: ApiResponse,
	next: NextFunction
) => {
	Logger.error("Error", error);
	if (res.headersSent) {
		next(error);
		return;
	}
	if (error instanceof ApiError) {
		return new ApiFailure(res).send(error.message, error.status);
	} else if (error instanceof DbConnectionError) {
		return new ApiFailure(res).send(
			error.message || "Unable to connect to database",
			HTTP.status.SERVICE_UNAVAILABLE
		);
	} else if (error instanceof ParserSafetyError) {
		return new ApiFailure(res).send(
			error.message || HTTP.message.BAD_REQUEST,
			HTTP.status.BAD_REQUEST
		);
	} else {
		return new ApiFailure(res).send(
			error.message || HTTP.message.INTERNAL_SERVER_ERROR,
			HTTP.status.INTERNAL_SERVER_ERROR
		);
	}
};
