import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousels = [
    {
      title: 'Chào mừng đến với khách sạn Hoàng Long',
      subTitle: '40 Hậu Giang P.4 Tân Bình, Tp. Hồ Chí Minh - ĐT: 028 39480307',
      imageUrl: 'assets/img/carousel1.jpg'
    },
    {
      title: 'Welcome to Hoang Long Hotel',
      subTitle: '40 Hậu Giang ST Ward 4 Tân Bình District, HCMC - Tel: 028 39480307',
      imageUrl: 'assets/img/carousel2.jpg'
    },
    {
      title: 'Khách sạn đầy đủ tiện nghi với giá cả hợp lý - We have nice room with very competitive price',
      subTitle: 'Gần sân bay, chợ, siêu thị và trung tâm thành phố - Near to airpot, market and city center',
      imageUrl: 'assets/img/carousel3.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
