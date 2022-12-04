import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import bookingsRepository from "@/repositories/booking-repository";

async function findUserBookingByUserId(userId: number) {
  const booking = await bookingsRepository.findUserBookingByUserId(userId);

  if (!booking) {
    throw notFoundError();
  }
  return booking;
}

const bookingsService = {
  findUserBookingByUserId,
};

export default bookingsService;
