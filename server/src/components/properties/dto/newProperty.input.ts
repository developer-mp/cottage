import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewPropertyInput {
  @Field()
  picture: string;

  @Field()
  location: string;

  @Field(() => Int)
  @Max(20)
  @Min(1)
  bedroom: number;

  @Field(() => Int)
  @Max(20)
  @Min(1)
  bath: number;

  @Field(() => Int)
  @Max(30)
  @Min(1)
  numSleep: number;

  @Field(() => Int)
  @Max(10000)
  @Min(1)
  price: number;
}
