import { IsBooleanString, IsOptional, IsString } from 'class-validator';

export class QueryTodoDto {
  @IsString()
  @IsOptional()
  user?: string;

  @IsOptional()
  @IsBooleanString()
  completed?: boolean;
}
