import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { MyserviceService } from 'src/app/myservice.service';
import { CookieService } from 'ngx-cookie-service'
import { ActivatedRoute } from '@angular/router'
 
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  myusername
  myname
  myaddress
  myphone
  myroomtype
  myrouter
  loginstatus = "Please Login"
  bookingstatus = "inprocess"
  users: User[] = [];
  constructor(private myService: MyserviceService, private cookieService: CookieService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.myrouter = this.router.snapshot.params.id
    // this.cookieService.delete('loggedin');
    // this.cookieValue = this.cookieService.get('myname');
    this.myusername = this.cookieService.get('username');
    this.myService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }
  onSubmit()
  {
    // console.log(this.myrouter)
    this.users.forEach(user => {
      if(user.username==this.myusername)
      {
        this.loginstatus = "Login Success"
        this.myname = user.name
        this.myaddress = user.address
        this.myphone = user.phone
        if(this.myrouter==1){
          this.myroomtype = "Aesthetic Marble"
        }
        else if(this.myrouter==2){
          this.myroomtype = "Wooden Beauty"
        }
        else if(this.myrouter==3){
          this.myroomtype = "Fun Family"
        }
        else{
          this.myroomtype = "Not found: 404"
        }

        // this.myroomtype = "Best room"
        // console.log("User matched.")
        // console.log("Successfully Booked.",user.name);
        // this.cookieService.set('loggedin',"Success");
        // this.cookieService.set('username',user.username);
      }
      else
      {
        // console.log("Please enter a valid.")
      }
    });
  }
  myonSubmit(data){
    // console.log(data.name);
    var mydata = {
      username: this.myusername,
      roomtype: this.myroomtype,
      checkin: data.checkin,
      checkout: data.checkout,
      feedback: data.feedback,
    };
    // console.log(mydata);
    this.myService.postBook(mydata).toPromise();
    this.bookingstatus = "Booked";
    console.log(this.bookingstatus);
  }
}
