import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  rooms: any[] = [];
  messages: any[] = [];
  newMessage: string = '';
  newRoomName: string = '';
  roomId: string = '';
  userName: string = '';

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, public auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.userName = user.email || 'Anonymous';
        this.roomId = this.route.snapshot.paramMap.get('roomId') || '';
        this.loadRooms();
        if (this.roomId) {
          this.loadMessages();
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  loadRooms() {
    this.db.list('rooms').snapshotChanges().subscribe((rooms) => {
      this.rooms = rooms.map(room => ({ key: room.payload.key, ...room.payload.val }));
    });
  }

  loadMessages() {
    this.db.list(`messages/${this.roomId}`).valueChanges().subscribe((messages) => {
      this.messages = messages;
    });
  }

  createRoom() {
    if (this.newRoomName.trim()) {
      this.db.list('rooms').push({ name: this.newRoomName });
      this.newRoomName = '';
    }
  }

  joinRoom(roomId: string) {
    this.router.navigate([`/chat/${roomId}`]);
  }

  removeRoom(roomId: string) {
    this.db.list('rooms').remove(roomId);
  }

  sendMessage() {
    if (this.newMessage.trim() && this.roomId) {
      this.db.list(`messages/${this.roomId}`).push({
        user: this.userName || 'Anonymous',
        text: this.newMessage,
        timestamp: new Date().toISOString()
      });
      this.newMessage = '';
    }
  }
}
