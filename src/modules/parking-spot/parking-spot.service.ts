import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateParkingSpotDto } from './dto/create-parking-spot.dto';
import { UpdateParkingSpotDto } from './dto/update-parking-spot.dto';

@Injectable()
export class ParkingSpotService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateParkingSpotDto) {
    return await this.prisma.spot.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.spot.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.spot.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateParkingSpotDto) {
    return await this.prisma.spot.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.spot.delete({
      where: {
        id,
      },
    });
  }
}
