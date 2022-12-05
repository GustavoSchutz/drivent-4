import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getUserBooking } from "@/controllers";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .get("/", getUserBooking);

export { bookingRouter };
