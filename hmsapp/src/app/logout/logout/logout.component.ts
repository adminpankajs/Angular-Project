import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myService: MyserviceService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.delete('username');
    this.cookieService.delete('loggedin');
  }

}
