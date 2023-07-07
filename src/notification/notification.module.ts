/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { FeedbackModule } from 'src/feedback/feedback.module';


@Module({
  imports:[FeedbackModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}

