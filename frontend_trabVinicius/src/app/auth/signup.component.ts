import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { first } from "rxjs";

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
    myForm!: FormGroup;
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, [
                Validators.required,
                Validators.minLength(4), Validators.maxLength(16)
            ]),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z0-9]\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        })
    }
}
