import { Component } from "@angular/core";

@Component({
    selector: 'app-logout',
    standalone: true,
    template:`
    <div class="col-md-8 col-offset-2">
        <button class="btn btn-danger" (click)= "onLogout()">Logout</button>
    </div>
    
    `
})

export class LogoutComponent {
    onLogout(){
     
    }

}