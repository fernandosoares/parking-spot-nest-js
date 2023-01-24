import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingSpotDto } from './create-parking-spot.dto';

export class UpdateParkingSpotDto extends PartialType(CreateParkingSpotDto) {}
