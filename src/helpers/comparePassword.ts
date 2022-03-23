import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function comparePasswordValidator(otherValue: string = ""): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if(value != otherValue){
            return {matchConfirmPassword: true};
        }
        return null;
    }
}