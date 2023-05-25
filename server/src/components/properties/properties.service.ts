import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './entities/property';
import { NewPropertyInput } from './dto/newProperty.input';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}
  public async getAllProperties(): Promise<Property[]> {
    return await this.propertyRepository.find({}).catch((err) => {
      throw new InternalServerErrorException(err);
    });
  }
  public async addProperty(
    newPropertyData: NewPropertyInput,
  ): Promise<Property> {
    const newProperty = this.propertyRepository.create(newPropertyData);
    await this.propertyRepository.save(newProperty).catch((err) => {
      new InternalServerErrorException(err);
    });
    return newProperty;
  }
}
