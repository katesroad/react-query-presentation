import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument, Todo } from 'db/schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoModel.insertMany([createTodoDto]);
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const res = await this.todoModel.updateOne({ _id: id }, updateTodoDto);

    if (res.acknowledged) {
      return this.todoModel
        .findOne({ _id: id })
        .then((record) => record.toJSON());
    } else {
      throw new InternalServerErrorException('Updating record failed');
    }
  }

  async remove(id: string) {
    const res = await this.todoModel.deleteOne({ _id: id });

    if (res.deletedCount) {
      return true;
    }

    throw new InternalServerErrorException(`Failed to delete record`);
  }
}
