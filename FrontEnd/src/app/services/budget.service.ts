import { Injectable } from '@angular/core';
import { Budget, BudgetsService } from '../api-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
    
  constructor(private budgetsService: BudgetsService,private http: HttpClient) {}

  getBudgets() {
    return this.http.get<Budget[]>('/api/Budgets');
  }

  createBudget(budget: any) {
    return this.budgetsService.apiBudgetsPost(budget);
  }
}