import { EmployeeRecord } from "./employee/EmployeeRecord";
import { EmployeeFactoreImpl } from "./employeeFactory/implementation/EmployeeFactoryImpl";

const employeeFactory = new EmployeeFactoreImpl();
const employeeRecord = new EmployeeRecord('COMMISSIONED');
const employee = employeeFactory.makeEmployee(employeeRecord);

console.log(employee.calculatePay());
