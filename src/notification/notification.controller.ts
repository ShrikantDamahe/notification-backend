/* eslint-disable prettier/prettier */

import { Controller, Get, Param, Res, Query, Sse } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Observable, from, map } from 'rxjs';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Sse('stream')
  stream(@Query('studentId') studentId: number): Observable<{ data: any; }> {
       // Convert the result to an Observable using the from function
      //  console.log(studentId);

      return from(this.notificationService.getFeedbacks(studentId)).pipe(
          map(feedback => ({
              data: feedback,
          })))
  }
  
  // @Get()
  // public async streamNotificationsToStudent(@Param() studentId: number): Promise<void> {
  //   const sseClient = this.notificationService.registerSseClient(studentId);

    // Set SSE headers
    // res.setHeader('Content-Type', 'text/event-stream');
    // res.setHeader('Cache-Control', 'no-cache');
    // res.setHeader('Connection', 'keep-alive');
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // // Subscribe to SSE client updates
    // const sseSubscription = sseClient.subscribe((notification: NotificationDto) => {
    //   // Send SSE event for each notification
    //   res.write(`event: notification\ndata: ${JSON.stringify(notification)}\n\n`);
    // });

  // }
}
