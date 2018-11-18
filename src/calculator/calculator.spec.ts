import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Calculator } from './calculator';

describe('Calculator', () => {
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                Calculator
            ],
        }).compileComponents();
    }));
    describe('addExpense', () => {
        it('should have a total of 5 when expense of 5 is added', () => {
            const calculator = Calculator
            calculator.addExpense(5);
            expect(calculator.).toBe(5);
        });
    });
});
