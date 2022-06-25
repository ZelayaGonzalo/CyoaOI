import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { zoomInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations:[
    zoomInAnimation
  ]
})
export class WelcomeComponent implements OnInit {

  @Output() nextStage = new EventEmitter<number>();
  hideContent = false
  constructor() { }

  ngOnInit(): void {
  }

  onEnter(){
    this.hideContent = true
    this.nextStage.emit(1)
  }

}
