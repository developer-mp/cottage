import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'property' })
@ObjectType()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  picture: string;

  @Column()
  @Field()
  location: string;

  @Column()
  @Field()
  bedroom: number;

  @Column()
  @Field()
  bath: number;

  @Column()
  @Field()
  numSleep: number;

  @Column()
  @Field()
  price: number;
}
