import { prisma } from "@/config";

async function findUserBookingByUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId,
    },
    select: {
      id: true,
      Room: true,
    }
  });
}

const bookingsRepository = {
  findUserBookingByUserId,
};

export default bookingsRepository;
