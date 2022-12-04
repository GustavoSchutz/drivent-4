import { prisma } from "@/config";

async function findUserBookingByUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      id: userId,
    },
    include: {
      Room: true,
    }
  });
}

const bookingsRepository = {
  findUserBookingByUserId,
};

export default bookingsRepository;
