import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html'
})
export class RoomListComponent implements OnInit {
  rooms: any[] = ["tert"];

  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.db.list('rooms').valueChanges().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  joinRoom(roomId: string) {
    this.router.navigate([`/chat/${roomId}`]);
  }
}