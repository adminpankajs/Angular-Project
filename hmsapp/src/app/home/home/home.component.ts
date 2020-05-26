import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private myService: MyserviceService) { }

  ngOnInit(): void {
    this.myService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

}
