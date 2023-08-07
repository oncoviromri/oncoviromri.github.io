import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() {
    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
    });
  }

  ngOnInit(): void {
    localStorage.setItem('page', 'publications')
  }


}
