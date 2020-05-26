import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { MyserviceService } from 'src/app/myservice.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loggedin
  users: User[] = [];
  constructor(private myService: MyserviceService, private cookieService: CookieService) { }
  
  ngOnInit(): void {
    // this.cookieService.delete('loggedin');
    // this.cookieValue = this.cookieService.get('myname');
    this.loggedin = this.cookieService.get('loggedin');
    this.myService.getUsers()
    .subscribe((users: User[]) => this.users = users);
    // console.log(this.users);
    // console.log("TESTING")
    // this.users.forEach(user => {
      //   console.log(user.username);
      // })
      // this.onSubmit();
    }
    onSubmit(data)
    // onSubmit()
    {
    console.log(data.name);
    var mydata = {
      username: data.username,
      password: data.password
    };
    // console.log(this.users)
    this.users.forEach(user => {
      // console.log(user.username)
      if(user.username==mydata.username && user.password==mydata.password)
      {
        console.log("Successfully Logged in.",user.name);
        this.cookieService.set('loggedin',"Success");
        this.cookieService.set('username',user.username);
      }
      else
      {
        console.log("Please enter a valid.")
      }
    });
  }
  
  checklogin(){
    this.loggedin = this.cookieService.get('loggedin');
  }
}
