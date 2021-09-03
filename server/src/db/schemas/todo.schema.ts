import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ versionKey: false })
export class Todo {
  @Prop({
    default: false,
    required: false,
  })
  completed: boolean;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  user: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
