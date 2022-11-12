import { Employee } from "../Employee";
import { EmployeeRecord } from "../EmployeeRecord";

export class HourlyEmployee extends EmployeeRecord {
    constructor() {
        super('HOURLY');
    }

    public calculatePay(): string {
        return "Calculating a payment to a hourly employee";
    }
}