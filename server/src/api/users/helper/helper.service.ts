import { Injectable } from '@nestjs/common';
const faker = require('faker');

@Injectable()
export class HelperService {
  generateUsers(count: number) {
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

  generateTodos(count: number, user: string) {
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
