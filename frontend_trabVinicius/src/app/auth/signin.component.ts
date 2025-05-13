import { Component, OnInit } from "@angular/core";
import { Form, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm! : FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.fb.group({
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
                    tjis.minusculoFValidartor
                ]),
            ]
            
        });
    }

    minusculoFVali    
    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
}


