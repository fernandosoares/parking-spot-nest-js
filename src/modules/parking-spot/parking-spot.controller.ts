import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkingSpotService } from './parking-spot.service';
import { CreateParkingSpotDto } from './dto/create-parking-spot.dto';
import { UpdateParkingSpotDto } from './dto/update-parking-spot.dto';

@Controller('parking-spot')
export class ParkingSpotController {
  constructor(private readonly parkingSpotService: ParkingSpotService) {}

  @Post()
  async create(@Body() data: CreateParkingSpotDto) {
    return await this.parkingSpotService.create(data);
  }

  @Get()
  async findAll() {
    return await this.parkingSpotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingSpotService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParkingSpotDto: UpdateParkingSpotDto,
  ) {
    return this.parkingSpotService.update(id, updateParkingSpotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingSpotService.remove(id);
  }
}
