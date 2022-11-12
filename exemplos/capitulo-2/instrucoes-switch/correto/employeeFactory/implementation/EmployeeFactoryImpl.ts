import { Employee } from "../../employee/Employee";
import { CommissionedEmployee } from "../../employee/implementations/CommissionedEmployee";
import { HourlyEmployee } from "../../employee/implementations/HourlyEmployee";
import { SalariedEmployee } from "../../employee/implementations/SalariedEmployee";
import { InvalidEmployeeTypeException } from "../../InvalidEmployeeTypeException";
import { EmployeeFacoty } from "../EmployeeFactory";

export class EmployeeFactoreImpl implements EmployeeFacoty {
    makeEmployee(employee: Employee): Employee {
        switch (employee.type) {
            case 'COMMISSIONED':
                return new CommissionedEmployee();
            case 'HOURLY':
                return new HourlyEmployee();
            case 'SALARIED':
                return new SalariedEmployee()
            default:
                throw new InvalidEmployeeTypeException();
        }
    }
}