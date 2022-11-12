import { EmployeeRecord } from "./employee/EmployeeRecord";
import { EmployeeFactory } from './employee/EmployeeFactory'

const employeeFactory = new EmployeeFactory();
const employeeRecord = new EmployeeRecord('COMMISSIONED');
const employee = employeeFactory.makeEmployee(employeeRecord);

console.log(employee.calculatePay());
