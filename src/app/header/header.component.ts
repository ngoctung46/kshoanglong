import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = [
    { name: 'Home', translatedName: 'Trang Chủ', url: 'home' },
    { name: 'Room', translatedName: 'Phòng', url: 'room' },
    { name: 'About', translatedName: 'Giới Thiệu', url: 'about' },
    { name: 'Contact', translatedName: 'Liên Hệ', url: 'contact' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
