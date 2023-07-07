/* eslint-disable prettier/prettier */
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { NotificationDto } from 'src/notification/dto/notification.dto';
import { FeedbackService } from './feedback.service';

  
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('send')
  public sendNotification(@Body(ValidationPipe) notificationDto: NotificationDto): void {
    this.feedbackService.sendNotification(notificationDto); 
  }
}
