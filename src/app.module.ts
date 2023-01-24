import { Module } from '@nestjs/common';
import { ParkingSpotModule } from './modules/parking-spot/parking-spot.module';

@Module({
  imports: [ParkingSpotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
