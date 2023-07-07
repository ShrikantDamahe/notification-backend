import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [NotificationModule, FeedbackModule],
  controllers: [AppController, FeedbackController],
  providers: [AppService, FeedbackService],
})
export class AppModule {}
