import { Request, Response } from "express";

export type ApiRequest = Request;
export type ApiResponse = Response;
export type ApiRes<T> = { message: string; data: T };
export type Cookie = {
	name: string;
	value: string;
	maxAge: number;
};
