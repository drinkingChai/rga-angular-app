import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "MST3K"
  subtitle = "the early days".split('').map((char, i) => ({ i: i + 1, char }))
  paragraphs = [
    "In the not too distant future, next Sunday, AD",
    "There was a man. There were some puppets. It was amazing.",
    "These are the experiments of the SOL."
  ]

  constructor() { }

  ngOnInit() {
  }

}
