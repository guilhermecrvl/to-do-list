import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TdlDocument = HydratedDocument<Tdl>;

@Schema()
export class Tdl {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TdlSchema = SchemaFactory.createForClass(Tdl);
