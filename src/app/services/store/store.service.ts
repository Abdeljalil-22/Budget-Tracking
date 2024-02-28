import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) {}
  // Get all budgets
  getBudgets(): Observable<any[]> {
    return this.db.list('/budgets').valueChanges().pipe(
      map((budgets: any[]) => budgets.map(budget => ({ key: budget.key, ...budget })))
    );
  }

// Create a new budget
createBudget(budget: any) {
  return this.db.list('/budgets').push(budget);
}

// Get a specific budget
getBudget(key: string): Observable<any> {
  return this.db.object(`/budgets/${key}`).valueChanges();
}

// Update a budget
updateBudget(key: string, budget: any) {
  return this.db.object(`/budgets/${key}`).update(budget);
}

// Delete a budget
deleteBudget(key: string) {
  return this.db.object(`/budgets/${key}`).remove();
}
}
