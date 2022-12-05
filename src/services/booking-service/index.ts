import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import bookingRepository from "@/repositories/booking-repository";

async function findUserBookingByUserId(userId: number) {
  const booking = await bookingRepository.findUserBookingByUserId(userId);

  if (!booking) {
    throw notFoundError();
  }
  return booking;
}

const bookingService = {
  findUserBookingByUserId,
};

export default bookingService;
