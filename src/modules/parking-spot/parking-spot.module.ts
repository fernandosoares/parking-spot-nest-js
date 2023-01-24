import { Module } from '@nestjs/common';
import { ParkingSpotService } from './parking-spot.service';
import { ParkingSpotController } from './parking-spot.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ParkingSpotController],
  providers: [ParkingSpotService, PrismaService],
})
export class ParkingSpotModule {}
