import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],

  providers: [PropertiesService, PropertiesResolver],
  exports: [PropertiesService],
})
export class PropertiesModule {}
