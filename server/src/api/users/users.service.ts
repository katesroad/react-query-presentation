import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from 'db/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    return this.userModal.create(createUserDto);
  }

  findAll() {
    return this.userModal.find(null, { _v: 0 });
  }

  findOne(id: string) {
    return this.userModal.findById(id);
  }
}
