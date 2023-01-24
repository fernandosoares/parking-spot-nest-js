import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateParkingSpotDto {
  @IsNotEmpty()
  @MaxLength(5)
  spot_number: string;
  @IsNotEmpty()
  car_brand: string;
  @IsNotEmpty()
  car_model: string;
  @IsNotEmpty()
  car_color: string;
  @IsNotEmpty()
  car_license_plate: string;
  @IsNotEmpty()
  apartment: string;
  @IsNotEmpty()
  tower: string;
  @IsNotEmpty()
  owner: string;
}
