import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import compat version
//import { auth } from 'firebase/auth'; // Import for additional methods (optional)
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {}

  // Login with email and password
  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  // Signup with email and password
  signup(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign out the current user
  signOut() {
    return this.fireAuth.signOut();
  }

  // Get the currently signed-in user (observable)
  get currentUser(): Observable<any | null> {
    return this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    );
  }

  // Check if the user is currently authenticated (boolean)
  isAuthenticated(): boolean {
    const user = this.fireAuth.currentUser;
    return !!user; // !! is a double negation operator, converting undefined to false
  }
}