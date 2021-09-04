import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from 'db/schemas/todo.schema';
import { User, UserDocument } from 'db/schemas/user.schema';
import { Model } from 'mongoose';

const faker = require('faker');

@Injectable()
export class HelperService {
  constructor(
    @InjectModel(User.name) private userModal: Model<UserDocument>,
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  private async onApplicationBootstrap() {
    const users = await this.userModal.count();

    if (!users) {
      const users = this.generateUsers(3);
      await this.userModal.insertMany(users);
    }

    const todos = await this.todoModel.count();

    if (!todos) {
      const users = await this.userModal
        .find(null, { _id: 1 })
        .then((docs) => docs.map((doc) => doc.toJSON()));

      for (let i = 0, len = users.length; i < len; i++) {
        const todos = this.generateTodos(10, users[i]._id);
        await this.todoModel.insertMany(todos);
      }
    }
  }

  private generateUsers(count: number) {
    const users: { name: string; age: number }[] = [];

    for (let i = 0; i < count; i++) {
      const user = {
        age: Math.floor(Math.random() * 20 + 18),
        email: faker.internet.email(),
        name: faker.name.findName(),
      };
      users.push(user);
    }

    return users;
  }

  private generateTodos(count: number, user: string) {
    const todos: {
      title: string;
      description: string;
      completed: boolean;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const todo = {
        completed: Math.random() > 0.5 ? true : false,
        description: faker.commerce.productDescription(),
        title: faker.commerce.productName(),
        user,
      };
      todos.push(todo);
    }

    return todos;
  }
}
