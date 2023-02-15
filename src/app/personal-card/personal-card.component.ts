import { Component } from '@angular/core';
import { User } from "./../models/User";

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent {
  user;

  constructor(){
    this.user = new User(
      "Mario",
      "Bros",
      48,
      "not too bad for a plumber",
      "./../assets/mario_img.jpg"
    )
  }

}
