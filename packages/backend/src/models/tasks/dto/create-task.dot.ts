import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  projectId: string;

  @IsNotEmpty()
  createdBy: string;

  @IsNotEmpty()
  assignedTo: string;
}
