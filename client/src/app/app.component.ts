import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  

   //----------- Properties -------------------
  
  title = 'AppUser';
  //Added injected Client in the Component   
  //constructor(private httpClient: HttpClient) {}   ////constructor way 
  http = inject(HttpClient); 
  users : any;  

  //--------------------------------------------

  ngOnInit(): void {
    //getting the endpoint  
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    }) // Return an observable of the response body as a JavaScript object

  }
}
 