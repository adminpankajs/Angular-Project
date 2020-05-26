import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mysignup
  myflag = "false"
  constructor(private myService: MyserviceService) { }
  
  ngOnInit(): void {
  }
  
  onSubmit(data)
  {
    console.log(data.name);
    var mydata = {
      name: data.name,
      address: data.address,
      phone: data.phone,
      username: data.username,
      password: data.password
    };
    this.myService.postUser(mydata).toPromise();  
    this.myflag = "true"
  }
  signup(){
    if(this.myflag=="true"){
      this.mysignup = "User Created"
    }
    else{
      this.mysignup = "Signup"
    }
  }
}
