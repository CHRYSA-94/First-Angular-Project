import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName = {
  firstName:"Chrysa",
  lastName: "Lazaridou"
}
firstLetters: string;
array = [];
  constructor() { }

  ngOnInit(): void {
    Object.values(this.userName).forEach(val => this.array.push(val.slice(0,1)))
    this.firstLetters = this.array.join("")
  }

}
