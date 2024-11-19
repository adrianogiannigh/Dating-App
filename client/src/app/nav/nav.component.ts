import { Component, inject , } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
//This component is used to navigate the user
export class NavComponent {
accountService = inject(AccountService); //This is used to inject the AccountService
model : any = {}; //This object is used to store the user data

//This function is used to login the user
  login() {
    //This logs the user data using the AccountService
    this.accountService.login(this.model).subscribe({    
      next: response => { //This logs the response using next
        console.log(response);        
      },
      error: error => { //this logs the error using error
        console.log(error);
      }
    })
  }

  logout() {
    //This logs out the user out using the AccountService
    this.accountService.logout();
  }
}
