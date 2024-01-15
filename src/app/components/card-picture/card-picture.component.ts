import { Component } from '@angular/core';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.css']
})
export class CardPictureComponent {

  playAudio(){
    let audio = new Audio();
    audio.src = '../../../assets/sounds/click-button.mp3';
    audio.load();
    audio.play();
  }
}
