import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Todo, TodoSchema } from './schemas/todo.schema';

const features = [
  {
    name: User.name,
    schema: UserSchema,
  },
  {
    name: Todo.name,
    schema: TodoSchema,
  },
];

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
    MongooseModule.forFeature(features),
  ],
  exports: [MongooseModule.forFeature(features)],
})
export class DbModule {}
