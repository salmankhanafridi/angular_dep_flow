import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {

  constructor(public httpClient: HttpClient) {

  }

      getAllUsers() {

      return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    
  }

       updateUser(name:string, id:number) {

      return this.httpClient.put(`https://jsonplaceholder.typicode.com/er/${id}`, { name });
    
  }





}