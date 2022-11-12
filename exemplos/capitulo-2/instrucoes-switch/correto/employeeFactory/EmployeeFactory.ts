import { Employee } from "../employee/Employee";

export interface EmployeeFacoty {
    makeEmployee(employee: Employee): Employee;
}