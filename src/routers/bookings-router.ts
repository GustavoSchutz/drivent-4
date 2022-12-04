import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getUserBooking } from "@/controllers";

const bookingsRouter = Router();

bookingsRouter
  .all("/*", authenticateToken)
  .get("/", getUserBooking);

export { bookingsRouter };
