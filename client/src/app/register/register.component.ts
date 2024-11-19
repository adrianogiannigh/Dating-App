import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
//This component is used to register the user
export class RegisterComponent {

  
  private accountService = inject(AccountService);//This is used to inject the account service
    
  //@Output() cancelRegister = new EventEmitter(); //This is used to emit the cancel event
  cancelRegister = output<boolean>(); //This is used to emit the cancel event

  //This object is used to store the user data
  model: any = {}

  //This function regist the user
  register() {    
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
    },
    error: error => 
      console.log(error)    
    })
    
  }

  //This function is used to cancel the registration
  cancel()
  {
    this.cancelRegister.emit(false); //This emits the cancel event
  }
}
