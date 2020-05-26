import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedin = "1";
  constructor(private cookieService: CookieService) { }
  
  title = 'hmsapp';
  public ngOnInit(): void{
    this.loggedin = this.cookieService.get('loggedin');
  }
}
