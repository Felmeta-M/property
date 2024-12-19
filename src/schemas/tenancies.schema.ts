import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Tenancy extends Document {
  @Prop({ type: String, required: true })
  propertyId: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date })
  endDate: Date;

  @Prop({ type: String, required: true })
  tenantId: string;
}

export const TenancySchema = SchemaFactory.createForClass(Tenancy);
