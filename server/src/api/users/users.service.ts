import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from 'db/schemas/user.schema';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'db/schemas/todo.schema';
import { HelperService } from './helper/helper.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModal: Model<UserDocument>,
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
    private helperService: HelperService,
  ) {}

  async onApplicationBootstrap() {
    const users = await this.userModal.count();
    if (!users) {
      const users = this.helperService.generateUsers(3);
      await this.userModal.insertMany(users);
    }

    const todos = await this.todoModel.count();
    if (!todos) {
      const users = await this.userModal
        .find(null, { _id: 1 })
        .then((docs) => docs.map((doc) => doc.toJSON()));

      for (let i = 0, len = users.length; i < len; i++) {
        const todos = this.helperService.generateTodos(10, users[i]._id);
        await this.todoModel.insertMany(todos);
      }
    }
  }

  create(createUserDto: CreateUserDto) {
    return this.userModal.create(createUserDto);
  }

  findAll() {
    return this.userModal.find(null, { _v: 0 });
  }

  findOne(id: string) {
    return this.userModal.findById(id);
  }

  findUserTodos(id: string) {
    return this.todoModel.find(
      {
        user: id,
      },
      { description: 0 },
    );
  }
}
