import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, CarouselComponent, StaffComponent]
})
export class HomeModule { }
