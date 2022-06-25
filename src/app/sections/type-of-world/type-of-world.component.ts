import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { spinShow,inOutAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-type-of-world',
  templateUrl: './type-of-world.component.html',
  styleUrls: ['./type-of-world.component.scss'],
  animations:[
    spinShow,inOutAnimation
  ]
})
export class TypeOfWorldComponent implements OnInit {

  @Output() addSelection = new EventEmitter<Mirror>()
  @Output() nextStage = new EventEmitter()

  @Input() types:Mirror[] =[]
  @Input() intro:Mirror =<Mirror>{}
  @Input() background:string = ''
  @Input() selected:Mirror[] =[]

  pageTitle:string = ''
  
  showHelp = true
  currentCard:Mirror = <Mirror>{}
  showButtonText = 'Close'
  showButtonLayout = 'single'
 
  constructor() { }

  ngOnInit(): void {
   this.currentCard = this.intro
   this.pageTitle = this.currentCard.title
  }

  onShowHelp():void{
    this.showHelp = true
  }
  onHideHelp():void{
    this.ClearFields()
    this.showHelp = false
  }
  openMirror(selected:Mirror){
    this.currentCard = selected
    this.showButtonText = 'Continue'
    this.showButtonLayout = 'double'
    this.onShowHelp()
  }

  onPick(currentCard:Mirror){
    this.addSelection.emit(currentCard)
    this.nextStage.emit()
  }

  ClearFields():void{
    this.currentCard = <Mirror>{}
  }

}
