import { Employee } from "./Employee";
import { Payroll } from "./Payroll";

const employee = new Employee('COMMISSIONED');
const payroll = new Payroll();

console.log(payroll.calculatePay(employee));