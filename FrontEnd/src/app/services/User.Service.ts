import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private collectionName = 'users';
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}


  getUserData(): Observable<any> {
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          console.log("getUserData authState test 1",user.uid);
          // return 
          let test = this.firestore.collection(this.collectionName).doc(user.uid).valueChanges();
          console.log("getUserData  collection test 24",test);
          return test;
          // this.firestore.collection(this.collectionName).doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  async updateUserData(data: { displayName?: string; email?: string }): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('User is not authenticated');

    const updates: any = {};
    if (data.displayName) {
      await user.updateProfile({ displayName: data.displayName });
      updates.displayName = data.displayName;
    }
    if (data.email) {
      await user.updateEmail(data.email);
      updates.email = data.email;
    }

 
    await this.firestore.collection(this.collectionName).doc(user.uid).update(updates);
  }


  async deleteUser(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('User is not authenticated');

    await this.firestore.collection(this.collectionName).doc(user.uid).delete();

    await user.delete();
  }

  async createUser(id:string,user: any): Promise<any> {
    console.log("createUser",user);
    let test =this.firestore.collection(this.collectionName).doc(id).set(user);
    console.log("createUser",test);
    return test;
  }
}
