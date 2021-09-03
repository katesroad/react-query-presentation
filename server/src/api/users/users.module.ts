import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from '../../db/db.module';
import { HelperService } from './helper/helper.service';

@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [UsersService, HelperService],
})
export class UsersModule {}
