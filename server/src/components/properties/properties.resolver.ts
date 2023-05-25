import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Property } from './entities/property';
import { PropertiesService } from './properties.service';
import { NewPropertyInput } from './dto/newProperty.input';

@Resolver()
export class PropertiesResolver {
  constructor(private propertiesService: PropertiesService) {}

  @Query(() => [Property])
  public async properties(): Promise<Property[]> {
    return await this.propertiesService.getAllProperties().catch((err) => {
      throw err;
    });
  }
  @Mutation(() => Property)
  public async addNewProperty(
    @Args('newPropertyData') newPropertyData: NewPropertyInput,
  ): Promise<Property> {
    return await this.propertiesService
      .addProperty(newPropertyData)
      .catch((err) => {
        throw err;
      });
  }
}
