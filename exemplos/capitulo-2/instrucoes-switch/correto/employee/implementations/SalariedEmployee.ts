import { Employee } from "../Employee";
import { EmployeeRecord } from "../EmployeeRecord";

export class SalariedEmployee extends EmployeeRecord {
    constructor() {
        super('SALARIED');
    }

    public calculatePay(): string {
        return "Calculating a payment to a salaried employee";
    }
}