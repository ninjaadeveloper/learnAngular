import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API URL
  constructor(private client: HttpClient) { }


  getData() {
    return this.client.get(this.apiUrl);
  }
}
