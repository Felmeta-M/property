import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Property extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ type: String, required: true })
  ownerId: string;

  @Prop({ type: String, required: true })
  tenantId: string;

  @Prop({ type: Object, default: {} })
  metadata: Record<string, any>;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
