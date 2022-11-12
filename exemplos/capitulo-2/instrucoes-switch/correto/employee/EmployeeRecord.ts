import { Employee } from "./Employee";

export class EmployeeRecord extends Employee {
    public type: string;

    constructor (type: string) {
        super();
        this.type = type;
    }

    public calculatePay(): string {
        throw new Error("Method not implemented.");
    }
}