import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "./errors.js";
import { respondWithJSON } from "./json.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) 
{
  if (err instanceof BadRequestError) {
    respondWithJSON(res, 400, { error: err.message });
  } else {
    res.status(500).send("Internal Server Error");
  }
}