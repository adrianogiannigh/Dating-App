import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  //Added injected Client in the Component   
  //constructor(private httpClient: HttpClient) {}   ////constructor way 
  http = inject(HttpClient); 
  registerMode = false;
  users : any;  

ngOnInit(): void {
  this.getUsers(); //This is used to get the users
}

registerToggle(){
  this.registerMode = !this.registerMode;
}

cancelRegisterMode(event : boolean)
{
  this.registerMode = event;
}

//This function is used to get the users
getUsers() {
  //getting the endpoint  
this.http.get('https://localhost:5001/api/users').subscribe({ // It uses the HttpClient get method to get the users
  next: response => this.users = response,  // This logs the response using next
  error: error => console.log(error), // This logs the error using error
  complete: () => console.log('Request has completed') // This logs that the request has completed
}) // Return an observable of the response body as a JavaScript object
}

}