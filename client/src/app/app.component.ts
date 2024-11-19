import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  

   //----------- Properties -------------------
  
  title = 'AppUser';
  //Added injected Client in the Component   
  //constructor(private httpClient: HttpClient) {}   ////constructor way 
  http = inject(HttpClient); 
  private accountService = inject(AccountService);
  users : any;  

  //--------------------------------------------

  //This function is used in ng Intialization
  ngOnInit(): void {
    this.getUsers(); //This is used to get the users
    this.setCurrentUser();    //This is used to set the current user
  }

  //This function is used to set the current user
  setCurrentUser()
  {
    const userString = localStorage.getItem('user'); //This gets the user data from the local storage
    if(!userString) return; //This returns if the user data is not found
    const user = JSON.parse(userString); //This parses the user data to a JSON object
    this.accountService.currentUser.set(user); //This sets the current user to the user object
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
 