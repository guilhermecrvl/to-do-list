import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTdlDto {
  @IsNotEmpty()
  @MaxLength(40)
  title: string;

  @MaxLength(200)
  @IsNotEmpty()
  description: string;
}
