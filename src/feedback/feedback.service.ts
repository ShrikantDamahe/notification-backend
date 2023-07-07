/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MongoClient, Db, ObjectId } from 'mongodb';
import { Subject } from 'rxjs';
import { NotificationDto } from '../notification/dto/notification.dto';


@Injectable()
export class FeedbackService { 
    
  private readonly mongoClient: MongoClient;
  private readonly db: Db;
  private readonly sseClients: Map<number, Subject<NotificationDto>>;

    constructor() {
        this.mongoClient = new MongoClient('mongodb://127.0.0.1:27017');
        this.db = this.mongoClient.db('Nott');
        this.sseClients = new Map<number, Subject<NotificationDto>>();
      }

    public async sendNotification(notificationDto: NotificationDto): Promise<void> {
      const sseClient = this.sseClients.get(notificationDto.studentId);

        // const sseClient = this.sseClients.get(studentId); 

        if (sseClient) {
          // Send the notification to the client with the provided student ID
          sseClient.next(notificationDto);
        }
      
        // Update the student document in the 'students' collection   
        await this.db.collection('students').insertOne(notificationDto)
    
        // console.log(`Notification sent to student with ID ${studentId}: ${feedback}`);
      }
}

