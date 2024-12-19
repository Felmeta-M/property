import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Test extends Document {
  @Prop()
  name: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
