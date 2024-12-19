import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Job extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string; // e.g., ACTIVE, PENDING, COMPLETED

  @Prop({ type: String, required: true })
  assignedTo: string;

  @Prop({ type: String, required: true })
  propertyId: string;

  @Prop({ type: String, required: true })
  tenantId: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
