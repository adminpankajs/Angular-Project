import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import Room from 'src/app/models/room';
import Book from 'src/app/models/book';
import Member from 'src/app/models/member'
import { MyserviceService } from 'src/app/myservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  users : User[] = [];
  member: Member[] = [];
  myuser : User[] = [];
  room : Room[] = [];
  myroom : Room[] = [];
  book : Book[] = [];
  mybook : Book[] = [];
  myusername: string;

  constructor(private myService: MyserviceService, private cookieService: CookieService) { }

  ngOnInit(): void {
    // this.myusername = "shivadmin";
    this.myusername = this.cookieService.get('username');
    this.myService.getUsers()
      .subscribe((users: User[]) => this.users = users);
    
    this.myService.getMember()
      .subscribe((member: Member[]) => this.member = member);
      
    this.myService.getRoom()
      .subscribe((room: Room[]) => this.room = room);
    this.myService.getBook()
      .subscribe((book: Book[]) => this.book = book);
  }
  myonload()
  {
    this.myService.getUsers()
      .subscribe((users: User[]) => this.users = users);
    
    this.myService.getMember()
      .subscribe((member: Member[]) => this.member = member);
      
    this.myService.getRoom()
      .subscribe((room: Room[]) => this.room = room);
    this.myService.getBook()
      .subscribe((book: Book[]) => this.book = book);
    
    // this.users.forEach(user =>{
    //   if(user.username==this.myusername)
    //   {
    //     this.myuser=user;
    //   }
    //   else
    //   {
    //     console.log("Please Login First");
    //   }
    // });

    // this.book.forEach(book =>{
    //   if(book.username==this.myusername)
    //   {
    //     this.mybook=book;
    //   }
    //   else
    //   {
    //     console.log("Please Login First");
    //   }
    // });
  }

  delete(myobj: Book)
  {
    console.log("Delete Processing",myobj._id);
    this.myService.deleteBook(myobj._id)
      .subscribe((book: Book[]) => this.book = book); 
    
    this.myonload();
  }
}
