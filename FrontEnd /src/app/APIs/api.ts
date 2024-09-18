export * from './auth.service';
import { AuthService } from './auth.service';
export * from './budgets.service';
import { BudgetsService } from './budgets.service';
export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './labels.service';
import { LabelsService } from './labels.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AuthService, BudgetsService, CategoriesService, LabelsService, UsersService];
