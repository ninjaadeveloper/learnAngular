import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://dummyjson.com/users";


  constructor(private client:HttpClient) { }


  getUsers(){
   return this.client.get(this.apiUrl);
  }

}
