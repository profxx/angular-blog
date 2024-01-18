import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.css']
})
export class CardPictureComponent {

  @Output() showDetails: EventEmitter<any> = new EventEmitter();

  constructor(){}

  @Input()
  imgCardDetails:string = '';


  playAudio(){
    let audio = new Audio();
    audio.src = '../../../assets/sounds/click-button.mp3';
    audio.load();
    audio.play();
  }

  handleClicked(){
    this.showDetails.emit();
  }  
}
