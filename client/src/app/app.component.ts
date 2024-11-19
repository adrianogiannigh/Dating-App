import { NgFor } from '@angular/common';
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
     
  private accountService = inject(AccountService);  

  //--------------------------------------------

  //This function is used in ng Intialization
  ngOnInit(): void {    
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

  
}
 