import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
