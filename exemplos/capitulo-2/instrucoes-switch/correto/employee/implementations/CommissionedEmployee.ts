import { Employee } from "../Employee";
import { EmployeeRecord } from "../EmployeeRecord";

export class CommissionedEmployee extends EmployeeRecord {
    constructor() {
        super('COMMISSIONED');
    }

    public calculatePay(): string {
        return "Calculating a payment to a commissioned employee";
    }    
}