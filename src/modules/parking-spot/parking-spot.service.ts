import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateParkingSpotDto } from './dto/create-parking-spot.dto';
import { UpdateParkingSpotDto } from './dto/update-parking-spot.dto';

@Injectable()
export class ParkingSpotService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateParkingSpotDto) {
    const { car_license_plate, spot_number, apartment, tower } = data;

    const isPlateConflict = await this.existisByCarLicensePlate(
      car_license_plate,
    );
    const isSpotConflict = await this.existisBySpotNumber(spot_number);
    const isApartmentAndTowerConflict =
      await this.existsApartmentAndTowerConflict(apartment, tower);

    if (isPlateConflict) {
      throw new ConflictException('LICENSE PLATE CONFLICT', {
        cause: new Error(),
        description: 'The provided license plate is already registered.',
      });
    }

    if (isSpotConflict) {
      throw new ConflictException('SPOT CONFLICT', {
        cause: new Error(),
        description: 'The provided parking spot is already in use.',
      });
    }

    if (isApartmentAndTowerConflict) {
      throw new ConflictException('APARTMENT/TOWER CONFLICT', {
        cause: new Error(),
        description: 'The provided apartment/tower is already in use.',
      });
    }

    return await this.prisma.spot.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.spot.findMany();
  }

  async findOne(id: string) {
    await this.isValidResource(id);
    return await this.prisma.spot.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateParkingSpotDto) {
    await this.isValidResource(id);

    return await this.prisma.spot.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    await this.isValidResource(id);

    return await this.prisma.spot.delete({
      where: {
        id,
      },
    });
  }

  private async isValidResource(id: string): Promise<void> {
    const resourceToBeDeleted = await this.prisma.spot.findFirst({
      where: {
        id,
      },
    });

    if (!resourceToBeDeleted) {
      throw new NotFoundException('RESOURCE not found!', {
        cause: new Error(),
        description: 'The RESOURCE was not found in the Database',
      });
    }
  }

  private async existisByCarLicensePlate(carLicensePlate: string) {
    return await this.prisma.spot.findFirst({
      where: {
        car_license_plate: carLicensePlate,
      },
    });
  }

  private async existsApartmentAndTowerConflict(
    apartment: string,
    tower: string,
  ) {
    return await this.prisma.spot.findFirst({
      where: {
        apartment,
        tower,
      },
    });
  }

  private async existisBySpotNumber(spotNumber: string) {
    return await this.prisma.spot.findFirst({
      where: {
        spot_number: spotNumber,
      },
    });
  }
}
