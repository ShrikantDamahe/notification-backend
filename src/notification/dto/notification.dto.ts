/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, } from "class-validator";

export class NotificationDto {

  @IsNotEmpty()
  studentId: number;

  @IsNotEmpty()
  @IsEnum(['Good','Average','Bad'])
  rating:string;

  @IsNotEmpty()
  feedback: string;


}
 