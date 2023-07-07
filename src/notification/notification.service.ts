/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MongoClient, Db, ObjectId } from 'mongodb';
import { Subject } from 'rxjs';
import { NotificationDto } from './dto/notification.dto';

@Injectable()  
export class NotificationService {
  
  get(studentId: string): any {
    throw new Error('Method not implemented.');
  }
  private readonly mongoClient: MongoClient;
  private readonly db: Db;
  private readonly sseClients: Map<number, Subject<NotificationDto>>;

  constructor() {
    this.mongoClient = new MongoClient('mongodb://127.0.0.1:27017');
    this.db = this.mongoClient.db('Nott');
    this.sseClients = new Map<number, Subject<NotificationDto>>();
  }

  
  public async getFeedbacks(studentId: number): Promise<any[]> {
    //Database collection name
    const collection = this.db.collection('students');
    // Find the SSE client for the specific student
    const feedbacks = await collection.find({ studentId }).toArray();
    return feedbacks;
  }

  public registerSseClient(studentId: number): Subject<NotificationDto> {
    const sseClient = new Subject<NotificationDto>();  
    this.sseClients.set(studentId, sseClient);
    return sseClient;
  }
}
