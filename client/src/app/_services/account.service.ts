import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//This service is used to manage the user account
export class AccountService {
  
  //This is used to inject the HttpClient
  private http = inject(HttpClient);
  
  baseUrl = "https://localhost:5001/api/"; //This is the base url of the api
  currentUser = signal<User | null >(null); //This is used to store the current user. 
 
  //This function is used to register the user
  login(model : any) {
    //This returns the user data using the HttpClient post method
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => { //This maps the user data to the user object 
        if(user){
          localStorage.setItem('user', JSON.stringify(user)); //This stores the user data in the local storage
          this.currentUser.set(user); //This sets the current user to the user object
        }
      })    
    );
  }

  //This function is used to logout the user
  logout() {
    localStorage.removeItem('user'); //This removes the user data from the local storage
    this.currentUser.set(null); //This sets the current user to null
  }

}
