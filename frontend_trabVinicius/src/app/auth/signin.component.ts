import { Component, OnInit } from "@angular/core";
import { AbstractControl,FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myFormIn! : FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.myFormIn = this.fb.group({
            emailTS:[
                null,
                Validators.compose([
                    Validators.required,
                    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")
                ]),
            ],
            passwordTS:[
                null,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    this.minusculoFValidator
                ])
            ]
            
        });
    }

    minusculoFValidator(control: AbstractControl) {
        const pass = control.value as string;
        if ( (pass !== pass?.toLowerCase()) && (pass !== null) ) {
            return { minusculoF: true };
        }
        return null;
    }
    onSubmit() {
        console.log(this.myFormIn);
        this.myFormIn.reset();
    }
}


