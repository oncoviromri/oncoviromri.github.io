import {Component, Inject, Input, OnInit} from '@angular/core';
import {BsNavbarComponent} from "../bs-navbar/bs-navbar.component";
import {ShareServiceService} from "../share-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('val')
  isOverlayDisplayed;
  constructor(private shareService: ShareServiceService) {

  }

  ngOnInit(): void {

  }

  getOverlayDisplay(): string{
    console.log('isdisplayed: ', this.isOverlayDisplayed);
    if (this.isOverlayDisplayed){
      return 'flex;';
    }
    else {
      return 'none;';
    }
  }


  getBurgerStatus() {
    return this.shareService.isBurgerClicked;
  }
}
