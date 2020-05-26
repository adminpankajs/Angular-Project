import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
    // this.MY_ROOT_URL = "http://localhost:4200";
   }

  getUsers() {
     return this.http.get(`${this.ROOT_URL}/users`);
   }
  // setCookie() {
  //    return this.http.get(`${this.MY_ROOT_URL}/setcookie`);
  //  }
  postUser(payload: Object) {
    return this.http.post(`${this.ROOT_URL}/users`, payload);
  }
  putUser(uri: string, payload: Object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  }
  deleteUser(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  getHotel() {
    return this.http.get(`${this.ROOT_URL}/hotel`);
  }
  getRoom() {
    return this.http.get(`${this.ROOT_URL}/room`);
  }
  getMember() {
    return this.http.get(`${this.ROOT_URL}/member`);
  }
  getBook() {
    return this.http.get(`${this.ROOT_URL}/book`);
  }
  postBook(payload : Object) {
    return this.http.post(`${this.ROOT_URL}/book`, payload);
  }
  deleteBook(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/book/${uri}`);
  }
}
