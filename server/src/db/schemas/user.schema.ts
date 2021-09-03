import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  versionKey: false,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 28 })
  age: number;

  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
