import { Component, OnInit } from '@angular/core';
import Hotel from 'src/app/models/hoteldetail';
import { MyserviceService } from 'src/app/myservice.service';
import Member from 'src/app/models/member'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  hotel: Hotel[] = [];
  member: Member[] = [];
  // mymember: Member[] = [];
  constructor(private myService: MyserviceService) { }
  
  ngOnInit(): void {
    this.myService.getHotel()
      .subscribe((hotel: Hotel[]) => this.hotel = hotel);
    this.myService.getMember()
      .subscribe((member: Member[]) => this.member = member);
  }

  myfunc()
  {
    // this.hotel.forEach(hotel => {
    //   this.name = hotel.name;
    //   console.log(hotel.name);
    //   this.address = hotel.address;
    //   this.email = hotel.email;
    //   this.customercare = hotel.customercare;
    // });
    // this.mymember = this.member;
  }
}
