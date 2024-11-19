import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
//This component is used to register the user
export class RegisterComponent {
  //This object is used to store the user data
  model: any = {}

  //This function regist the user
  register() {
    //This logs the user data
    console.log(this.model);
  } 

  cancel()
  {
    console.log('cancelled');
  }
}
