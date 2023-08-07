import {Component, EventEmitter, OnInit} from '@angular/core';
import {ShareServiceService} from "../share-service.service";

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public isOverlayDisplayed: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  public val = true;

  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
      navbarLinks.classList.toggle('active');
    });

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

  clickBurger() {
    if (this.isSmallWindow()){ // click state is relevant only in case the window size is of mobile device
      this.shareService.isBurgerClicked = !this.shareService.isBurgerClicked;
    }
  }
  getBurgerStatus(){
    return this.shareService.isBurgerClicked;
  }

  isSmallWindow() {

    var w = window.innerWidth;
    console.log('size ', w);
    return w < 800;
  }

  hideMenu() {
    // @ts-ignore
    // document.getElementsByClassName<HTMLElement>('navbar-links').style.display = 'none';
  }

  showMenuTabs() {
    if (!this.isSmallWindow()){ //its a wide screen
      return true; //show tabs
    }
    // for small screen
    console.log(this.getBurgerStatus());
    return this.getBurgerStatus();
  }
}
