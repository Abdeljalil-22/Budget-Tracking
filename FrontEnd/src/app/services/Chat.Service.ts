// filepath: /home/adbel/CodeSource/new/Budget-Tracking/FrontEnd/src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Message {
  content: string;
  timestamp: number;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  getMessages(chatRoomId: string): Observable<Message[]> {
    return this.db.list<Message>(`chatRooms/${chatRoomId}/messages`, ref => ref.orderByChild('timestamp')).valueChanges();
  }

  sendMessage(chatRoomId: string, content: string) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const message: Message = {
          content: content,
          timestamp: Date.now(),
          userId: user.uid
        };
        this.db.list(`chatRooms/${chatRoomId}/messages`).push(message);
      }
    });
  }
}