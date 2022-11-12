import { Employee } from "./Employee";
import { InvalidEmployeeTypeException } from "./InvalidEmployeeTypeException";

class Payroll {
    public calculatePay (employee: Employee): string {
        switch (employee.type) {
            case 'COMMISSIONED':
                return this.calculatedCommissionedPay();
            case 'HOURLY':
                return this.calculatedHourlyPay();
            case 'SALARIED':
                return this.calculatedSalariedPay();
            default:
                throw new InvalidEmployeeTypeException();

        }
    }

    private calculatedCommissionedPay(): string {
        return "Calculating a payment to a commissioned employee";
    }

    private calculatedHourlyPay(): string {
        return "Calculating a payment to a hourly employee";
    }

    private calculatedSalariedPay(): string {
        return "Calculating a payment to a salaried employee";
    }
}

export {Payroll}